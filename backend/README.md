# Cash Manager Backend

This is the backend component of the Cash Manager application, built with Django and Django REST Framework.

## Setup

1. Create a virtual environment and activate it:
```bash
poetry shell
```

2. Install dependencies:
```bash
poetry install
```

3. Run migrations:
```bash
python manage.py migrate
```

4. Start the development server:
```bash
python manage.py runserver
```

## Project Structure

```
backend/
├── cash_manager/        # Django project settings
├── core/               # Core application
├── manage.py           # Django management script
└── pyproject.toml      # Poetry configuration
```
