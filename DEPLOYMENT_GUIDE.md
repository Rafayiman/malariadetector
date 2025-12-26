# Deployment Guide - MalariaAI Detector

## Overview
Your application has two parts that need deployment:
1. **Frontend**: React + Vite (TypeScript)
2. **Backend**: Flask + PyTorch API

---

## 🚀 Quick Deploy Options

### Option 1: Railway (Recommended - Easiest)
Deploy both frontend and backend on Railway with one click.

**Pros:**
- ✅ Free tier available ($5 credit/month)
- ✅ Automatic HTTPS
- ✅ Easy environment variables
- ✅ Good for Python/ML apps
- ✅ Database support

**Steps:**

#### Backend Deployment:
1. Create account at [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub"
3. Connect your repository
4. Railway auto-detects Python and installs from `requirements.txt`
5. Set environment variables:
   ```
   PORT=5000
   ```
6. Deploy! You'll get a URL like: `https://your-app.railway.app`

#### Frontend Deployment:
1. In Railway, add "New Service"
2. Select same repository
3. Add build command:
   ```
   npm install && npm run build
   ```
4. Set environment variable:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
5. Deploy!

---

### Option 2: Vercel (Frontend) + Render (Backend)

#### Frontend on Vercel:
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project" → Connect GitHub
3. Select your repository
4. Framework: Vite
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Environment Variables:
   ```
   VITE_API_URL=https://your-backend.onrender.com
   ```
8. Deploy!

#### Backend on Render:
1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect repository
4. Settings:
   - Name: malaria-detector-api
   - Environment: Python 3
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `gunicorn app:app`
5. Environment Variables:
   ```
   PORT=10000
   PYTHON_VERSION=3.11.0
   ```
6. Deploy!

---

### Option 3: Netlify (Frontend) + Railway (Backend)

#### Frontend on Netlify:
1. Go to [netlify.com](https://netlify.com)
2. "Add new site" → "Import existing project"
3. Connect GitHub
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Environment variables:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
6. Deploy!

---

## 📝 Pre-Deployment Checklist

### 1. Create Production Requirements File
Already exists: `requirements.txt` ✅

### 2. Add Procfile for Render/Railway (Optional)
Create `Procfile` in root:
```
web: gunicorn app:app --bind 0.0.0.0:$PORT --timeout 120
```

### 3. Update CORS Settings (if needed)
Your `app.py` already has:
```python
CORS(app, resources={r"/api/*": {"origins": "*"}})
```

For production, you should specify allowed origins:
```python
CORS(app, resources={
    r"/api/*": {
        "origins": ["https://your-frontend-domain.vercel.app"]
    }
})
```

### 4. Environment Variables Setup

Create `.env.production` (don't commit this):
```env
# Backend
PORT=5000
FLASK_ENV=production

# Frontend
VITE_API_URL=https://your-backend-url.com
```

### 5. Update Model Path (Important!)
Your `app.py` uses: `MODEL_PATH = 'public/malaria_model.pth'`
Make sure this file is included in deployment!

---

## 🔧 Deployment Commands

### Build Frontend Locally (Test):
```bash
npm run build
npm run preview
```

### Test Backend Locally:
```bash
python app.py
# or
gunicorn app:app --bind 0.0.0.0:5000
```

---

## 📦 Files Needed for Deployment

Make sure these files exist:

✅ `requirements.txt` - Python dependencies
✅ `package.json` - Node dependencies
✅ `vite.config.ts` - Vite configuration
✅ `app.py` - Flask application
✅ `public/malaria_model.pth` - ML model weights (27MB+)
✅ `.env` - Local environment (not committed)

---

## 🌐 Custom Domain Setup

### For Frontend (Vercel/Netlify):
1. Go to project settings
2. Add custom domain
3. Update DNS records (they'll guide you)

### For Backend (Railway/Render):
1. Go to settings → Custom domain
2. Add your domain
3. Update DNS with CNAME record

---

## 🔒 Security Best Practices

### 1. Update CORS for Production:
```python
# app.py
allowed_origins = os.environ.get('ALLOWED_ORIGINS', '*').split(',')
CORS(app, resources={
    r"/api/*": {"origins": allowed_origins}
})
```

### 2. Add Rate Limiting:
```bash
pip install flask-limiter
```

```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"]
)
```

### 3. Environment Variables:
Never commit:
- API keys
- Secret keys
- Database credentials
- Model weights (use cloud storage)

---

## 💾 Large Model File Handling

Your `malaria_model.pth` is likely large. Options:

### Option 1: Git LFS (Git Large File Storage)
```bash
git lfs install
git lfs track "*.pth"
git add .gitattributes
git add public/malaria_model.pth
git commit -m "Add model with LFS"
```

### Option 2: Cloud Storage (Recommended)
Upload model to:
- AWS S3
- Google Cloud Storage
- Azure Blob Storage

Download on startup:
```python
import requests
import os

MODEL_URL = os.environ.get('MODEL_URL')
MODEL_PATH = 'malaria_model.pth'

if not os.path.exists(MODEL_PATH):
    print("Downloading model...")
    r = requests.get(MODEL_URL)
    with open(MODEL_PATH, 'wb') as f:
        f.write(r.content)
```

---

## 📊 Monitoring & Analytics

### Add Health Check Endpoint (Already exists!):
```python
@app.route('/health', methods=['GET'])
def health():
    return jsonify({
        'status': 'ok',
        'model_loaded': model is not None
    })
```

### Recommended Monitoring Tools:
- **Sentry** - Error tracking
- **LogRocket** - Session replay
- **Google Analytics** - Usage analytics
- **UptimeRobot** - Uptime monitoring

---

## 🚀 Deployment Steps Summary

### Quick Start (Railway - Easiest):

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy Backend**:
   - Go to railway.app
   - New Project → Deploy from GitHub
   - Select repository
   - Add environment variables
   - Deploy!

3. **Deploy Frontend**:
   - Railway: New Service → Same repo
   - Set `VITE_API_URL` to backend URL
   - Deploy!

4. **Update Environment**:
   ```bash
   # In Railway dashboard, add:
   VITE_API_URL=https://your-backend.railway.app
   ```

5. **Test**:
   - Visit frontend URL
   - Upload sample image
   - Verify analysis works
   - Check report download

---

## 🐛 Common Issues & Solutions

### Issue 1: Model Not Found
**Solution**: Ensure `public/malaria_model.pth` is committed or use cloud storage

### Issue 2: CORS Errors
**Solution**: Update CORS settings in `app.py` with frontend URL

### Issue 3: Build Fails
**Solution**: Check Node version (24.x required in package.json)

### Issue 4: Slow Cold Starts
**Solution**: Use Railway or Render (better cold start handling)

### Issue 5: Out of Memory
**Solution**: 
- Use Railway Pro plan
- Or optimize model size
- Or use serverless GPUs (Banana.dev, Replicate)

---

## 💰 Cost Estimates

### Free Tier Options:
- **Vercel**: Free for frontend (100GB bandwidth)
- **Netlify**: Free for frontend (100GB bandwidth)
- **Railway**: $5 credit/month (usually enough for hobby projects)
- **Render**: Free tier available (services sleep after 15min inactivity)

### Paid Plans (if needed):
- **Railway Pro**: $20/month (8GB RAM, 8vCPU)
- **Render Starter**: $7/month per service
- **Vercel Pro**: $20/month (unlimited bandwidth)

---

## 📞 Need Help?

Common deployment issues:
1. Check logs in platform dashboard
2. Verify environment variables
3. Test locally first with production build
4. Check CORS settings
5. Ensure model file is accessible

---

## ✅ Post-Deployment Checklist

After deployment, verify:
- [ ] Frontend loads correctly
- [ ] Can upload images
- [ ] Analysis returns results
- [ ] Report downloads work
- [ ] All footer links work
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Custom domain (if applicable)
- [ ] Error tracking setup
- [ ] Analytics configured

---

**Ready to deploy? Start with Railway - it's the easiest for your ML app!** 🚀
