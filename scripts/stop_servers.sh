#!/bin/bash

# Usage: stop_servers.sh [django|react]
# Stops either Django server, React server, or both

# Function to print usage
usage() {
    echo "Usage: $0 [django|react]"
    echo "  django    Stop only Django server"
    echo "  react     Stop only React server"
    echo "  --help    Show this help message"
    exit 1
}

# Check if help is requested
if [[ "$1" == "--help" ]]; then
    usage
fi

# Function to find and kill processes
kill_processes() {
    local process_name="$1"
    local pids=$(pgrep -f "$process_name")
    
    if [[ -n "$pids" ]]; then
        echo "Stopping $process_name..."
        kill -TERM $pids
        sleep 1
        
        # Force kill if processes are still running
        local remaining=$(pgrep -f "$process_name")
        if [[ -n "$remaining" ]]; then
            echo "Force stopping remaining $process_name processes..."
            kill -KILL $remaining
        fi
        echo "$process_name stopped"
    else
        echo "$process_name is not running"
    fi
}

# Stop Django server
stop_django() {
    kill_processes "python manage.py runserver"
}

# Stop React server
stop_react() {
    kill_processes "npm start"
}

# Main script logic
case "$1" in
    django)
        stop_django
        ;;
    react)
        stop_react
        ;;
    "")
        stop_django
        stop_react
        ;;
    *)
        usage
        ;;
esac
