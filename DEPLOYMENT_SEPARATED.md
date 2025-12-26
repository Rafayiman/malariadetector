# 🚀 Deployment Guide - Separated Frontend & Backend

Your application is now split into two separate folders for easier deployment:

## 📁 Folder Structure

```
malariadetector/
├── backend/           # Flask + PyTorch API
│   ├── app.py
│   ├── requirements.txt
│   ├── Procfile
│   ├── runtime.txt
│   ├── railway.toml
│   └── public/
│       └── malaria_model.pth
│
└── frontend/          # React + Vite
    ├── src/
    ├── package.json
    ├── vite.config.ts
    ├── vercel.json
    └── .env
```

---

## 🎯 Deployment Strategy

- **Backend** → Railway (Python/ML optimized)
- **Frontend** → Vercel (React/Vite optimized)

---

## 📦 Step 1: Deploy Backend on Railway

### 1.1 Push Backend to GitHub

Create a **separate repository** for backend:

```bash
cd backend
git init
git add .
git commit -m "Initial backend commit"
git branch -M main
git remote add origin https://github.com/yourusername/malaria-backend.git
git push -u origin main
```

### 1.2 Deploy on Railway

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub"**
3. Select your **backend repository**
4. Railway will detect Python automatically
5. Click **"Deploy"**

### 1.3 Set Environment Variables

In Railway dashboard → **Variables** tab:

```
PORT=5000
ALLOWED_ORIGINS=*
```

(You'll update `ALLOWED_ORIGINS` after deploying frontend)

### 1.4 Get Backend URL

After deployment, copy your backend URL:
```
https://your-backend.up.railway.app
```

**✅ Backend deployed!**

---

## 🎨 Step 2: Deploy Frontend on Vercel

### 2.1 Push Frontend to GitHub

Create a **separate repository** for frontend:

```bash
cd frontend
git init
git add .
git commit -m "Initial frontend commit"
git branch -M main
git remote add origin https://github.com/yourusername/malaria-frontend.git
git push -u origin main
```

### 2.2 Deploy on Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Import Project"**
3. Select your **frontend repository**
4. **Framework:** Vite
5. **Build Command:** `npm run build`
6. **Output Directory:** `dist`
7. Click **"Deploy"**

### 2.3 Set Environment Variables

In Vercel dashboard → **Settings** → **Environment Variables**:

```
VITE_API_URL=https://your-backend.up.railway.app
```

(Use the backend URL from Step 1.4)

### 2.4 Redeploy

After adding the environment variable:
- Go to **Deployments** tab
- Click **"Redeploy"** on the latest deployment

### 2.5 Get Frontend URL

After deployment, copy your frontend URL:
```
https://your-frontend.vercel.app
```

**✅ Frontend deployed!**

---

## 🔗 Step 3: Connect Frontend & Backend

### 3.1 Update Backend CORS

Go back to Railway → Backend service → **Variables** tab:

Update `ALLOWED_ORIGINS`:
```
ALLOWED_ORIGINS=https://your-frontend.vercel.app
```

### 3.2 Redeploy Backend

Railway will automatically redeploy after updating the variable.

**✅ Frontend and Backend connected!**

---

## ✅ Step 4: Test Your Deployment

1. Visit your frontend URL: `https://your-frontend.vercel.app`
2. Upload a sample malaria image
3. Verify analysis works
4. Check report download functionality

---

## 🐛 Troubleshooting

### CORS Errors

**Problem:** `Access-Control-Allow-Origin` error in browser console

**Solution:**
1. Check Railway backend → Variables → `ALLOWED_ORIGINS`
2. Must match your Vercel frontend URL exactly
3. Include `https://` in the URL

### API Connection Failed

**Problem:** Frontend can't connect to backend

**Solution:**
1. Check Vercel → Settings → Environment Variables → `VITE_API_URL`
2. Must match your Railway backend URL exactly
3. No trailing slash in URL
4. Redeploy frontend after changing

### Model Not Loading

**Problem:** Backend returns "Model not loaded"

**Solution:**
1. Ensure `public/malaria_model.pth` is in backend repository
2. Check Railway deployment logs for errors
3. Verify file size (should be ~90MB)

### Build Failures

**Backend:**
- Check `requirements.txt` has all dependencies
- Verify Python version in `runtime.txt` (3.11)

**Frontend:**
- Run `npm install` locally first
- Check for TypeScript errors: `npm run lint`
- Verify Node version (20.x+)

---

## 📊 Monitoring

### Check Backend Status

```
https://your-backend.up.railway.app/health
```

Should return:
```json
{
  "status": "ok",
  "model_loaded": true,
  "device": "cpu",
  "cors_origins": "https://your-frontend.vercel.app"
}
```

### Check Frontend

Visit your frontend URL and verify:
- [ ] Page loads correctly
- [ ] Can upload images
- [ ] Analysis returns results
- [ ] Can download reports
- [ ] All navigation links work

---

## 💰 Cost

- **Railway:** $5 credit/month (free tier)
- **Vercel:** Free for hobby projects
- **Total:** Free! 🎉

---

## 🔄 Future Updates

### Update Backend

```bash
cd backend
git add .
git commit -m "Update backend"
git push
```

Railway will auto-deploy.

### Update Frontend

```bash
cd frontend
git add .
git commit -m "Update frontend"
git push
```

Vercel will auto-deploy.

---

## 📝 Quick Reference

### Backend URLs
- Repository: `github.com/yourusername/malaria-backend`
- Deployment: `your-backend.up.railway.app`
- Health Check: `your-backend.up.railway.app/health`

### Frontend URLs
- Repository: `github.com/yourusername/malaria-frontend`
- Deployment: `your-frontend.vercel.app`

### Environment Variables
**Backend (Railway):**
- `PORT=5000`
- `ALLOWED_ORIGINS=https://your-frontend.vercel.app`

**Frontend (Vercel):**
- `VITE_API_URL=https://your-backend.up.railway.app`

---

## 🎉 Success!

Both services should now be deployed and communicating properly!

- ✅ Backend running on Railway
- ✅ Frontend running on Vercel
- ✅ CORS configured
- ✅ Environment variables set
- ✅ Ready for production!

Need help? Check the troubleshooting section above or review the deployment logs in Railway/Vercel dashboards.
