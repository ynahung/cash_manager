#!/bin/bash

# Run pre-commit hooks with proper environment
set -e

# Get the directory of this script
SCRIPT_DIR=$(dirname "$(readlink -f "$0")")
PROJECT_DIR=$(dirname "$SCRIPT_DIR")

echo "Setting up pre-commit environment..."

# Create and activate virtual environment
PYTHON_VERSION="3.13.3"
ENV_NAME="cash_manager_precommit"

# Install Python version if not present
echo "Checking Python version..."
if ! pyenv versions --bare | grep -q "^${PYTHON_VERSION}$"; then
    echo "Installing Python ${PYTHON_VERSION}..."
    pyenv install ${PYTHON_VERSION}
fi

# Create virtual environment if it doesn't exist
if ! pyenv virtualenvs --bare | grep -q "^${ENV_NAME}$"; then
    echo "Creating virtual environment..."
    pyenv virtualenv ${PYTHON_VERSION} ${ENV_NAME}
fi

# Activate virtual environment
echo "Activating virtual environment..."
pyenv activate ${ENV_NAME}

# Install pre-commit dependencies if not installed
echo "Installing pre-commit dependencies..."
pip install pre-commit black isort flake8 pylint safety

# Install project dependencies if not installed
echo "Installing project dependencies..."
poetry install

# Run pre-commit
echo "Running pre-commit hooks..."
pre-commit run --all-files

echo "Pre-commit checks completed successfully!"
