#!/bin/bash
echo "$PORT"
exec python ./django_backend/manage.py runserver $PORT