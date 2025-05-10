from django.contrib.auth import login, logout
from django.utils.translation import gettext_lazy as _
from rest_framework import authentication, generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from .serializers import AuthTokenSerializer, UserSerializer


class UserCreateView(generics.CreateAPIView):
    """Create a new user in the system."""

    serializer_class = UserSerializer


class UserDetailView(generics.RetrieveUpdateAPIView):
    """Get and update authenticated user."""

    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """Retrieve and return authenticated user."""
        return self.request.user


class UserLoginView(generics.GenericAPIView):
    """Create a new auth token for user."""

    serializer_class = AuthTokenSerializer

    def post(self, request):
        """Authenticate user and return auth token."""
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        token, _ = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "user_id": user.pk, "email": user.email})


class UserLogoutView(generics.GenericAPIView):
    """Logout user and delete auth token."""

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request):
        """Logout user and delete auth token."""
        request.user.auth_token.delete()
        logout(request)
        return Response(
            {"detail": _("Successfully logged out.")}, status=status.HTTP_200_OK
        )
