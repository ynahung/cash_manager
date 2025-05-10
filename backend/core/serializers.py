from rest_framework import serializers

from .models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            "id",
            "user",
            "amount",
            "transaction_type",
            "description",
            "category",
            "date",
            "created_at",
            "updated_at",
        ]
