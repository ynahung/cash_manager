#!/bin/sh
cd backend && poetry run pylint --rcfile=.pylintrc . --ignore=".venv" --disable=fixme,C0103
