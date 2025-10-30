# 🧠 Hackathon App

Структура проекта вебприложения
(пока что тут только простая форма и таблица задач)

## ⚙️ Стек технологий

### Backend:
* Python 3.12+
* Django 5+
### Frontend:
- HTML + Django Templates
- Bootstrap 5
### Database:
* SQLite (думаю в сторону перехода на Postgres)


## Быстрый старт 


1️⃣ Клонируем репозиторий
```
git clone https://github.com/yourname/hackathon-app.git
cd hackathon-app
```
2️⃣ Запуск локально
```
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```
3️⃣ Запускаем сервер
```
python manage.py runserver
```
Веб-приложение будет доступно: http://127.0.0.1:8000/

## Опционально
Создаём таблицы в базе
```
python manage.py makemigrations
python manage.py migrate
```
Создаём суперпользователя
```
python manage.py createsuperuser
```
Запуск через Docker
Для запуска в докере предусмотрен docker-compose.yaml
Сборка и запуск:
```
docker compose build
docker compose up -d
```
Остановить и удалить контейнеры:
```
docker compose down
```
