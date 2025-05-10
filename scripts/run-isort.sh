#!/bin/sh
cd backend
# Remove any existing virtualenv to avoid conflicts
rm -rf venv
# Run flake8 using poetry
poetry run isort . 