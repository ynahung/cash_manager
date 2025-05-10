#!/bin/bash

# Usage: start_servers.sh [django|react]
# Starts either Django server, React server, or both

# Set project root directory
SCRIPT_DIR=$(dirname "$0")
PROJECT_ROOT=$(realpath "$SCRIPT_DIR/..")

# Function to print usage
usage() {
    echo "Usage: $0 [django|react]"
    echo "  django    Start only Django server"
    echo "  react     Start only React server"
    echo "  --help    Show this help message"
    exit 1
}

# Check if help is requested
if [[ "$1" == "--help" ]]; then
    usage
fi

# Start Django server
start_django() {
    echo "Starting Django server..."
    cd "$PROJECT_ROOT/backend" || { echo "Error: Could not enter backend directory"; exit 1; }
    poetry run python manage.py runserver &
    echo "Django server started!"
}

# Start React server
start_react() {
    echo "Starting React server..."
    cd "$PROJECT_ROOT/frontend" || { echo "Error: Could not enter frontend directory"; exit 1; }
    npm start &
    echo "React server started!"
}

# Main script logic
case "$1" in
    django)
        start_django
        ;;
    react)
        start_react
        ;;
    "")
        start_django
        start_react
        ;;
    *)
        usage
        ;;
esac

# Wait for all background processes
echo "Servers are starting in the background..."
wait
