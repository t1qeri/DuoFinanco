# 🧠 Hackathon App — Django REST + React + Vite

Простое веб-приложение:  
**Backend** — Django + DRF + JWT + Swagger  
**Frontend** — React + Vite + Axios  

Полностью готово к использованию на хакатоне 🚀

---

## ⚙️ Стек технологий

**Backend:**
- Django 5+
- Django REST Framework
- Simple JWT
- drf-yasg (Swagger)
- CORS Headers

**Frontend:**
- React 18+
- Vite
- Axios

---

## 🚀 Быстрый старт

### 1️⃣ Клонировать репозиторий
```bash
git clone https://github.com/yourname/hackathon-app.git
cd hackathon-app
```

### 2️⃣ Запуск backend (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # или venv\Scripts\activate на Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # (по желанию)
python manage.py runserver
```

📍 Сервер запустится на  
➡️ http://127.0.0.1:8000/

#### Доступные эндпоинты:
- `/api/tasks/` — CRUD задачи (JWT авторизация)
- `/api/token/` — получение токена
- `/api/token/refresh/` — обновление токена
- `/swagger/` — Swagger UI
- `/redoc/` — ReDoc документация

---

### 3️⃣ Запуск frontend (React + Vite)
```bash
cd ../frontend
npm install
npm run dev
```

📍 Приложение доступно по адресу  
➡️ http://localhost:5173/

---

## 🔑 Авторизация
1. Создай пользователя в Django:
   ```bash
   python manage.py createsuperuser
   ```
2. Получи JWT токен:
   ```bash
   POST /api/token/
   {
     "username": "yourusername",
     "password": "yourpassword"
   }
   ```
3. Сохрани токен в localStorage (автоматически делает фронт при логине).

---

## 📂 Структура проекта
```
hackathon-app/
│
├── backend/
│   ├── manage.py
│   ├── backend/
│   │   ├── settings.py
│   │   ├── urls.py
│   └── api/
│       ├── models.py
│       ├── views.py
│       ├── serializers.py
│       └── urls.py
│
└── frontend/
    ├── vite.config.js
    ├── src/
    │   ├── App.jsx
    │   ├── api.js
    │   ├── components/
    │   │   ├── LoginForm.jsx
    │   │   └── TaskList.jsx
    └── package.json
```

---

## 🐳 (опционально) Запуск через Docker
```bash
docker compose up --build
```
*(можно добавить `backend` и `frontend` сервисы в docker-compose.yml)*

---

## 📜 Лицензия
MIT © 2025 — [yourname](https://github.com/yourname)
