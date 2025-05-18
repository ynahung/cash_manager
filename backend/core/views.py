from datetime import datetime

from django.db.models import Count, Sum
from django.utils import timezone
from rest_framework import permissions, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Transaction
from .serializers import TransactionSerializer


class TransactionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows transactions to be viewed or edited.
    """

    queryset = Transaction.objects.all().order_by("-date")
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        """Return queryset filtered by user."""
        if getattr(self, "swagger_fake_view", False):
            # Return empty queryset for Swagger schema generation
            return self.queryset.none()
        return self.queryset.filter(user=self.request.user)

    @action(detail=False, methods=["get"])
    def monthly_summary(self):
        """
        Get monthly transaction summary for the current year.
        Returns:
            List of monthly summaries with total income, expense, and auto transactions
        """
        current_year = timezone.now().year
        summaries = []

        for month in range(1, 13):
            start_date = datetime(current_year, month, 1)
            if month == 12:
                end_date = datetime(current_year + 1, 1, 1)
            else:
                end_date = datetime(current_year, month + 1, 1)

            monthly_transactions = self.get_queryset().filter(
                date__gte=start_date, date__lt=end_date
            )

            summary = {
                "month": month,
                "year": current_year,
                "total_income": monthly_transactions.filter(
                    transaction_type="income"
                ).aggregate(Sum("amount"))["amount__sum"]
                or 0,
                "total_expense": monthly_transactions.filter(
                    transaction_type="expense"
                ).aggregate(Sum("amount"))["amount__sum"]
                or 0,
                "total_auto_income": monthly_transactions.filter(
                    transaction_type="auto_income"
                ).aggregate(Sum("amount"))["amount__sum"]
                or 0,
                "total_auto_expense": monthly_transactions.filter(
                    transaction_type="auto_expense"
                ).aggregate(Sum("amount"))["amount__sum"]
                or 0,
                "transaction_count": monthly_transactions.count(),
            }
            summaries.append(summary)

        return Response(summaries)

    @action(detail=False, methods=["get"])
    def yearly_summary(self):
        """
        Get yearly transaction summary.
        Returns:
            Summary of total income, expense, and auto transactions for the current year
        """
        current_year = timezone.now().year
        yearly_transactions = self.get_queryset().filter(date__year=current_year)

        summary = {
            "year": current_year,
            "total_income": yearly_transactions.filter(
                transaction_type="income"
            ).aggregate(Sum("amount"))["amount__sum"]
            or 0,
            "total_expense": yearly_transactions.filter(
                transaction_type="expense"
            ).aggregate(Sum("amount"))["amount__sum"]
            or 0,
            "total_auto_income": yearly_transactions.filter(
                transaction_type="auto_income"
            ).aggregate(Sum("amount"))["amount__sum"]
            or 0,
            "total_auto_expense": yearly_transactions.filter(
                transaction_type="auto_expense"
            ).aggregate(Sum("amount"))["amount__sum"]
            or 0,
            "transaction_count": yearly_transactions.count(),
            "net_balance": (
                yearly_transactions.filter(transaction_type="income").aggregate(
                    Sum("amount")
                )["amount__sum"]
                or 0
                + yearly_transactions.filter(transaction_type="auto_income").aggregate(
                    Sum("amount")
                )["amount__sum"]
                or 0
                - yearly_transactions.filter(transaction_type="expense").aggregate(
                    Sum("amount")
                )["amount__sum"]
                or 0
                - yearly_transactions.filter(transaction_type="auto_expense").aggregate(
                    Sum("amount")
                )["amount__sum"]
                or 0
            ),
        }

        return Response(summary)

    @action(detail=False, methods=["get"])
    def category_summary(self):
        """
        Get category-wise transaction summary for the current month.
        Returns:
            Summary of transactions grouped by category
        """
        current_month = timezone.now().month
        current_year = timezone.now().year

        start_date = timezone.make_aware(datetime(current_year, current_month, 1))
        if current_month == 12:
            end_date = timezone.make_aware(datetime(current_year + 1, 1, 1))
        else:
            end_date = timezone.make_aware(datetime(current_year, current_month + 1, 1))

        categories = (
            Transaction.objects.filter(date__gte=start_date, date__lt=end_date)
            .values("category")
            .annotate(total_amount=Sum("amount"), transaction_count=Count("id"))
            .order_by("-total_amount")
        )

        return Response(categories)
