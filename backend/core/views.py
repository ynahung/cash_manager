from rest_framework import permissions, viewsets

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
