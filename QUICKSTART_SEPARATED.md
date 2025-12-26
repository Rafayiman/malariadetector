# 🚀 Quick Start - Separated Deployment

## ✅ What Was Done

Your project has been separated into two folders:

1. **`backend/`** - Flask + PyTorch API (for Railway)
2. **`frontend/`** - React + Vite app (for Vercel)

---

## 📋 Next Steps

### Option 1: Deploy Both (Recommended)

Follow the complete guide: [DEPLOYMENT_SEPARATED.md](DEPLOYMENT_SEPARATED.md)

### Option 2: Test Locally First

**Backend:**
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows
pip install -r requirements.txt
python app.py
```
Runs on: http://localhost:5000

**Frontend:**
```bash
cd frontend
npm install
npm run dev
```
Runs on: http://localhost:8080

---

## 🎯 Deployment Summary

### Backend on Railway
1. Create GitHub repo from `backend/` folder
2. Deploy on Railway
3. Get backend URL
4. Set `ALLOWED_ORIGINS=*` (temporarily)

### Frontend on Vercel
1. Create GitHub repo from `frontend/` folder
2. Deploy on Vercel
3. Set `VITE_API_URL=<backend-url>`
4. Get frontend URL

### Connect Them
1. Update Railway backend: `ALLOWED_ORIGINS=<frontend-url>`
2. Test the app!

---

## 📁 Files Overview

### Backend Files
- `app.py` - Main Flask application
- `requirements.txt` - Python dependencies
- `Procfile` - Railway start command
- `runtime.txt` - Python version
- `railway.toml` - Railway config
- `public/malaria_model.pth` - PyTorch model

### Frontend Files
- `src/` - React components and pages
- `package.json` - Node dependencies
- `vite.config.ts` - Vite configuration
- `vercel.json` - Vercel deployment config
- `.env` - Environment variables (local only)

---

## 🔗 Important URLs to Set

**After Backend Deploys:**
Copy URL and add to frontend `.env` or Vercel:
```
VITE_API_URL=https://your-backend.up.railway.app
```

**After Frontend Deploys:**
Copy URL and add to Railway backend:
```
ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

---

## ✨ Benefits of Separation

- ✅ Independent deployments
- ✅ Better platform optimization (Railway for Python, Vercel for React)
- ✅ Faster builds
- ✅ Cleaner git history
- ✅ Easier to manage

---

Read [DEPLOYMENT_SEPARATED.md](DEPLOYMENT_SEPARATED.md) for detailed step-by-step instructions!
