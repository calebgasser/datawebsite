#!/bin/bash
exec printenv
exec python ./django_backend/manage.py runserver "$PORT"