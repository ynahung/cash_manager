#!/bin/sh
# Ensure we're in the correct directory
cd backend
# Remove any existing virtualenv to avoid conflicts
rm -rf venv
# Run flake8 using poetry
poetry run flake8 . --exclude=".venv" --ignore=E501
