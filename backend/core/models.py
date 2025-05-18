from django.contrib.auth import get_user_model
from django.db import models

User = get_user_model()


CURRENCY_CHOICES = [
    ("USD", "US Dollar"),
    ("EUR", "Euro"),
    ("GBP", "British Pound"),
    ("JPY", "Japanese Yen"),
    ("CNY", "Chinese Yuan"),
    ("HKD", "Hong Kong Dollar"),
    ("SGD", "Singapore Dollar"),
    ("AUD", "Australian Dollar"),
    ("CAD", "Canadian Dollar"),
    ("INR", "Indian Rupee"),
]

TRANSACTION_TYPES = [
    ("income", "Income"),
    ("expense", "Expense"),
    ("auto_income", "Auto Income"),
    ("auto_expense", "Auto Expense"),
]


class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    transaction_type = models.CharField(max_length=12, choices=TRANSACTION_TYPES)
    currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES, default="USD")
    description = models.TextField()
    category = models.CharField(max_length=50)
    date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tags = models.JSONField(default=list, blank=True)
    notes = models.TextField(blank=True)
    receipt_url = models.URLField(blank=True)

    def __str__(self):
        return f"{self.transaction_type}: {self.amount} - {self.description}"

    class Meta:
        ordering = ["-date"]
        verbose_name = "Transaction"
        verbose_name_plural = "Transactions"
