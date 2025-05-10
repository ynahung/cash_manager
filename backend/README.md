# Cash Manager Backend

This is the backend component of the Cash Manager application, built with Django and Django REST Framework.

## Setup

### Prerequisites

1. Install Python 3.13
2. Install Poetry:
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ynahung/cash_manager.git
cd cash_manager/backend
```

2. Install dependencies:
```bash
poetry install
```

3. Create and apply database migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

4. Create a superuser (optional):
```bash
python manage.py createsuperuser
```

5. Start the development server:
```bash
python manage.py runserver
```

The server will be available at http://127.0.0.1:8000/

## Project Structure

```
backend/
├── cash_manager/        # Django project settings
│   ├── settings/       # Django settings
│   ├── urls.py         # URL routing
│   └── wsgi.py         # WSGI configuration
├── core/               # Core application
│   ├── models.py      # Database models
│   ├── views.py       # API views
│   ├── serializers.py # Django REST Framework serializers
│   ├── urls.py        # App-specific URLs
│   └── tests.py       # Test cases
├── manage.py           # Django management script
└── pyproject.toml      # Poetry configuration
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Database
DB_NAME=cash_manager
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432

# Django Settings
SECRET_KEY=your_secret_key
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# API Settings
API_VERSION=v1
```

## Running Tests

```bash
python manage.py test
```

## API Documentation

The API documentation is available at http://127.0.0.1:8000/api/docs/

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
