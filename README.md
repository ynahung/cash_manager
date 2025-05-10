# Cash Manager

A full-stack web application for managing cash flow and expenses.

## Documentation

- [Backend Documentation](backend/README.md)
- [Frontend Documentation](frontend/README.md)
- [Server Management](#server-management)
- [Code Formatting](#code-formatting)

## Project Structure

```
cash_manager/
├── backend/           # Django backend
├── frontend/          # React frontend
├── .env              # Environment variables (DO NOT COMMIT)
└── frontend/.env.development  # Frontend development environment variables
```

## Setup Instructions

### Environment Setup

1. Create a `.env` file in the root directory with your database and backend configurations.
2. For frontend development, create a `.env.development` file in the frontend directory:
   ```
   REACT_APP_ENV=dev
   REACT_APP_API_URL=http://localhost:8000
   ```

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

## Code Formatting

This project uses pre-commit hooks to ensure consistent code formatting and quality. The following tools are configured:

1. **Black** - Code formatter with line length of 88 characters
2. **isort** - Import organization tool
3. **flake8** - Code style checker
4. **Safety** - Dependency security checker

To set up pre-commit hooks:

```bash
pre-commit install
```

The hooks will automatically run before each commit to:
- Format Python code with black
- Organize imports with isort
- Check code style with flake8
- Check for security vulnerabilities in dependencies

You can also run these checks manually:

```bash
# Run all pre-commit hooks
pre-commit run --all-files

# Run specific hooks
pre-commit run black
pre-commit run isort
pre-commit run flake8
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Development Workflow and CI/CD Setup

### Branch Protection Rules

The project uses protected branches with the following rules:

1. **dev branch**
   - Protected from direct pushes
   - Requires pull requests for changes
   - Requires passing CI/CD checks before merge
   - Requires at least one approved review

2. **main branch**
   - Protected from direct pushes
   - Requires pull requests from dev branch
   - Requires passing CI/CD checks before merge
   - Requires at least one approved review

### Pull Request Workflow

1. Create a feature branch from dev:
```bash
git checkout -b feature/your-feature-name dev
```

2. Make your changes and commit them

3. Push your feature branch:
```bash
git push origin feature/your-feature-name
```

4. Create a pull request from your feature branch to dev
   - Add a clear description of your changes
   - Link any related issues
   - Request a review from a team member

5. After review and CI/CD checks pass, merge to dev

6. When ready for production, create a PR from dev to main
   - Follow the same review and CI/CD process
   - This will trigger production deployment

### CI/CD Pipeline

### Frontend CI/CD Pipeline

1. **Code Quality Checks**
   - Runs on push to main/dev branches and pull requests
   - Runs formatting check using Prettier and Stylelint
   - Runs linting using ESLint and Stylelint

2. **Build and Test**
   - Sets up Node.js environment
   - Installs dependencies and builds the frontend
   - Runs frontend tests
   - Uploads build artifacts

2. **Deployment**
   - Automatically deploys to production when pushing to main branch
   - Requires the following GitHub Secrets:
     - AWS_ACCESS_KEY_ID
     - AWS_SECRET_ACCESS_KEY
     - AWS_DEFAULT_REGION
     - CLOUDFRONT_DISTRIBUTION_ID
   - Deploy process:
     - Syncs build files to S3 bucket
     - Invalidates CloudFront cache

### Backend CI/CD Pipeline

1. **Code Quality Checks**
   - Runs on push to main/dev branches and pull requests
   - Runs formatting check using Black and isort
   - Runs linting using flake8 and pylint
   - Runs security checks using safety

2. **Build and Test**
   - Sets up Python environment
   - Runs tests

2. **Deployment**
   - Automatically deploys to production when pushing to main branch
   - Requires AWS credentials for deployment
   - Current deployment process is a placeholder - customize according to your infrastructure

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

## Code Formatting and Pre-commit Hooks

This project uses pre-commit hooks to ensure consistent code formatting and quality. The following tools are configured:

1. **Black** - Code formatter with line length of 88 characters
2. **isort** - Import organization tool
3. **flake8** - Code style checker
4. **Safety** - Dependency security checker

To set up pre-commit hooks:

```bash
pre-commit install
```

The hooks will automatically run before each commit to:
- Format Python code with black
- Organize imports with isort
- Check code style with flake8
- Check for security vulnerabilities in dependencies

You can also run these checks manually:

```bash
# Run all pre-commit hooks
pre-commit run --all-files

# Run specific hooks
pre-commit run black
pre-commit run isort
pre-commit run flake8
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
