#!/bin/bash

# Set up Python environment for pre-commit hooks
set -e

# Check if pyenv is installed
if ! command -v pyenv &> /dev/null; then
    echo "Error: pyenv is not installed. Please install pyenv first."
    exit 1
fi

# Create and activate virtual environment
PYTHON_VERSION="3.13.3"
ENV_NAME="cash_manager_precommit"

# Install Python version if not present
echo "Checking Python version..."
if ! pyenv versions --bare | grep -q "^${PYTHON_VERSION}$"; then
    echo "Installing Python ${PYTHON_VERSION}..."
    pyenv install ${PYTHON_VERSION}
fi

# Create virtual environment
echo "Creating virtual environment..."
pyenv virtualenv ${PYTHON_VERSION} ${ENV_NAME}

# Activate virtual environment
echo "Activating virtual environment..."
pyenv activate ${ENV_NAME}

# Install pre-commit dependencies
echo "Installing pre-commit dependencies..."
pip install pre-commit black isort flake8 pylint safety

# Install project dependencies
echo "Installing project dependencies..."
poetry install

# Initialize pre-commit hooks
echo "Installing pre-commit hooks..."
pre-commit install

echo "Pre-commit environment setup complete!"
