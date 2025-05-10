# Cash Manager

A full-stack web application for managing cash flow and expenses.

## Project Structure

```
cash_manager/
├── backend/           # Django backend
├── frontend/          # React frontend
└── .env              # Environment variables (DO NOT COMMIT)
```

## Setup Instructions

### Backend Setup
1. Install and configure pyenv if you haven't already:
```bash
# Install pyenv
brew install pyenv  # On macOS
apt-get install pyenv  # On Ubuntu

# Add pyenv to PATH
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc

# Initialize pyenv
echo 'eval "$(pyenv init --path)"' >> ~/.bashrc
source ~/.bashrc
```

2. Create and activate a Python virtual environment:
```bash
# Create virtualenv named 'django'
pyenv virtualenv 3.11.0 django

# Activate the virtualenv
eval "$(pyenv init --path)"
pyenv activate django
```

3. Install Poetry if you haven't already:
```bash
curl -sSL https://install.python-poetry.org | python3 -
```

4. Configure Poetry to use your virtual environment:
```bash
poetry config virtualenvs.in-project true
```

5. Install dependencies:
```bash
cd backend
poetry install
```

2. Run migrations:
```bash
python manage.py migrate
```

3. Start the Django development server:
```bash
python manage.py runserver
```

## Server Management

The project includes bash scripts to easily manage both Django and React servers.

### Using the Server Management Scripts

1. Start both servers:
```bash
./scripts/start_servers.sh
```

2. Start only Django server:
```bash
./scripts/start_servers.sh django
```

3. Start only React server:
```bash
./scripts/start_servers.sh react
```

4. Stop both servers:
```bash
./scripts/stop_servers.sh
```

5. Stop only Django server:
```bash
./scripts/stop_servers.sh django
```

6. Stop only React server:
```bash
./scripts/stop_servers.sh react
```

### Manual Server Management

If you prefer to start the servers manually:

1. Start the Django development server:
```bash
python manage.py runserver
```

### Frontend Setup
1. Install dependencies:
```bash
cd frontend
npm install
```

2. Start the React development server:
```bash
npm start
```

## Environment Variables
Create a `.env` file in the root directory with the following variables:
```
# Django Settings
DEBUG=True
SECRET_KEY=your-secret-key-here

# Database Settings
DB_NAME=cash_manager
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
DB_PORT=5432

# React Settings
REACT_APP_ENV=dev  # or 'prod' for production
```

## API Configuration
The frontend uses a configurable API endpoint system. The configuration is located in `frontend/src/config/api.js` and supports different environments:

```javascript
const API_CONFIG = {
  dev: {
    baseUrl: 'http://localhost:8000',
    endpoints: {
      transactions: '/api/transactions/',
    },
  },
  prod: {
    baseUrl: 'https://api.yourdomain.com',
    endpoints: {
      transactions: '/api/transactions/',
    },
  },
};
```

To switch between environments, set the `REACT_APP_ENV` environment variable:

```bash
# Development
REACT_APP_ENV=dev npm start

# Production
REACT_APP_ENV=prod npm start
```

## Security Note
- Never commit your `.env` file to version control
- Keep your `SECRET_KEY` secure
- For production, use environment-specific configuration
