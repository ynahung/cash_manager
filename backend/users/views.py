from django.contrib.auth import get_user_model, login, logout
from django.utils.translation import gettext_lazy as _
from rest_framework import authentication, generics, permissions, status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from .serializers import AuthTokenSerializer, UserSerializer


class UserCreateView(generics.CreateAPIView):
    """
    Create a new user account.

    Creates a new user account with the provided email and password.
    Returns the created user's information along with an authentication token.

    Request Body:
    - email: User's email address
    - password: User's password
    - username: User's username (optional)
    - first_name: User's first name (optional)
    - last_name: User's last name (optional)

    Response:
    201 - User created successfully with token and user details
    400 - Invalid input data
    """

    serializer_class = UserSerializer
    authentication_classes = []  # Remove authentication requirement for registration
    permission_classes = []  # Remove permission requirement for registration

    def perform_create(self, serializer):
        """Create user."""
        return serializer.save()

    def create(self, request, *args, **kwargs):
        """Create user and return token."""
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = self.perform_create(serializer)
        token = Token.objects.create(user=user)
        headers = self.get_success_headers(serializer.data)

        return Response(
            {"token": token.key, "user": serializer.data},
            status=status.HTTP_201_CREATED,
            headers=headers,
        )


class UserDetailView(generics.RetrieveUpdateAPIView):
    """
    Get and update user profile.

    Returns the authenticated user's profile information and allows updating user details.
    Requires authentication.

    Response:
    200 - User profile retrieved successfully
    401 - Unauthorized (if not authenticated)

    Update Request Body:
    - email: User's email address (optional)
    - username: User's username (optional)
    - first_name: User's first name (optional)
    - last_name: User's last name (optional)
    """

    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        """Get queryset for authenticated user."""
        user_model = get_user_model()
        return user_model.objects.filter(id=self.request.user.id)

    def get_object(self):
        """Retrieve and return authenticated user."""
        return self.request.user

    def get(self, request, *args, **kwargs):
        """Get user profile."""
        return self.retrieve(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        """Update user profile."""
        return self.update(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        """Partial update user profile."""
        return self.partial_update(request, *args, **kwargs)


class UserLoginView(generics.GenericAPIView):
    """
    Login user and get authentication token.

    Authenticates a user with email and password and returns an authentication token.
    The token should be used in subsequent requests for authentication.

    Request Body:
    - email: User's email address
    - password: User's password

    Response:
    200 - Authentication successful with token and user details
    400 - Invalid credentials
    """

    serializer_class = AuthTokenSerializer
    authentication_classes = []  # Remove authentication requirement for login
    permission_classes = []  # Remove permission requirement for login

    def post(self, request):
        """Authenticate user and return auth token."""
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        token, _ = Token.objects.get_or_create(user=user)
        serializer = UserSerializer(user)
        return Response({"token": token.key, "user": serializer.data})


class UserLogoutView(generics.GenericAPIView):
    """
    Logout user and invalidate authentication token.

    Logs out the authenticated user and deletes their authentication token.
    After logout, the user will need to login again to access protected endpoints.

    Response:
    200 - Logout successful
    401 - Unauthorized (if token is invalid)
    """

    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_serializer_class(self):
        """Return serializer class for Swagger schema generation."""
        if getattr(self, "swagger_fake_view", False):
            return UserSerializer
        return None

    def post(self, request):
        """Logout user and delete auth token."""
        request.user.auth_token.delete()
        logout(request)
        return Response(
            {"detail": _("Successfully logged out."), "user": request.user.username},
            status=status.HTTP_200_OK,
        )
