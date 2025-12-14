# Letters to Shyama Ju

A full-stack web application designed for writing letters. This project features a modern React frontend and a fast asynchronous Python backend.

## 🚀 Tech Stack

### Frontend
- **React** (v18)
- **Vite** - Build tool and development server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **MongoDB** - NoSQL Database
- **Motor** - Asynchronous MongoDB driver for Python
- **Pydantic** - Data validation

## 📂 Project Structure

```
├── backend/                 # FastAPI backend
│   ├── main.py             # Application entry point
│   ├── models.py           # Database models (LetterModel)
│   ├── routes.py           # API routes
│   └── requirements.txt    # Python dependencies
├── src/                    # Frontend source code
├── public/                 # Static assets
└── ...config files
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (v18+)
- Python (v3.8+)
- MongoDB (Running locally or a connection string)

### 1. Backend Setup

Navigate to the backend directory:
```bash
cd backend
```

Create and activate a virtual environment:
```bash
# Windows
python -m venv .venv
.venv\Scripts\activate

# macOS/Linux
python3 -m venv .venv
source .venv/bin/activate
```

Install dependencies:
```bash
pip install -r requirements.txt
```

Create a `.env` file in the `backend` folder:
```env
MONGO_URL=mongodb://localhost:27017
FRONTEND_URL=http://localhost:5173
```

Run the server:
```bash
uvicorn main:app --reload
```
The API will be available at `http://localhost:8000`.
Docs available at `http://localhost:8000/docs`.

### 2. Frontend Setup

Navigate to the project root (where `package.json` is):
```bash
npm install
```

Run the development server:
```bash
npm run dev
```
The application will be running at `http://localhost:5173`.

## 🔌 API Endpoints

**Base URL**: `/letters`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Get all letters |
| POST | `/` | Create a new letter |
| ... | ... | (See Swagger UI at /docs for full list) |

## 🧪 Deployment

- **Frontend**: Can be deployed to Vercel, Netlify, or Render Static Site.
- **Backend**: Can be deployed to Render Web Service, Heroku, or DigitalOcean.

## 📝 License

This project is open source.