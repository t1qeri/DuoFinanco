# Dockerfile для Django backend
FROM python:3.12-slim

WORKDIR /app

COPY backend/ ./backend/
COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

WORKDIR /app/backend
EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
