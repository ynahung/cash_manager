from django.contrib.auth import authenticate
from django.utils.translation import gettext_lazy as _
from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    """Serializer for user objects."""

    class Meta:
        model = User
        fields = ("id", "email", "username", "password")
        extra_kwargs = {"password": {"write_only": True, "min_length": 8}}

    def create(self, validated_data):
        """Create a new user with encrypted password."""
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        """Update user, setting the password correctly."""
        password = validated_data.pop("password", None)
        user = super().update(instance, validated_data)

        if password:
            user.set_password(password)
            user.save()

        return user


class AuthTokenSerializer(serializers.ModelSerializer):
    """Serializer for user authentication object."""

    class Meta:
        model = User
        fields = ("email", "password")
        extra_kwargs = {
            "password": {
                "style": {"input_type": "password"},
                "trim_whitespace": False,
                "write_only": True,
            }
        }

    def validate(self, attrs):
        """Validate and authenticate the user."""
        email = attrs.get("email")
        password = attrs.get("password")

        user = authenticate(
            request=self.context.get("request"), username=email, password=password
        )

        if not user:
            msg = _("Unable to authenticate with provided credentials")
            raise serializers.ValidationError(msg, code="authorization")

        attrs["user"] = user
        return attrs
