# 🚀 Deploy to Railway - Step by Step

## Prerequisites
- GitHub account
- Railway account (free)
- Your code pushed to GitHub

---

## Step 1: Push Your Code to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/malariadetector.git
git push -u origin main
```

---

## Step 2: Deploy Backend on Railway

### 2.1 Create Railway Account
1. Go to https://railway.app
2. Click "Login with GitHub"
3. Authorize Railway

### 2.2 Create New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your `malariadetector` repository
4. Railway will auto-detect Python

### 2.3 Configure Backend
1. Click on the service
2. Go to "Variables" tab
3. Add:
   ```
   PORT = 5000
   ```
4. Go to "Settings" tab
5. Scroll to "Networking"
6. Click "Generate Domain"
7. **Copy this URL** (e.g., `https://malariadetector-production.up.railway.app`)

### 2.4 Wait for Deployment
- Watch the logs in "Deployments" tab
- Should see "✓ Model loaded successfully!"
- Status should show "Active"

---

## Step 3: Test Backend

1. Open your browser
2. Visit: `https://your-backend-url.railway.app/health`
3. Should see:
   ```json
   {
     "status": "ok",
     "model_loaded": true,
     "device": "cpu"
   }
   ```

✅ Backend is live!

---

## Step 4: Deploy Frontend on Railway

### 4.1 Create Frontend Service
1. In same Railway project, click "New"
2. Select "Empty Service"
3. Click on the new service
4. Go to "Settings"
5. Connect to GitHub repo (same one)

### 4.2 Configure Build
1. In "Settings", set:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npx serve dist -l $PORT`
2. Go to "Variables" tab
3. Add:
   ```
   VITE_API_URL = https://your-backend-url.railway.app
   NODE_VERSION = 20
   ```
   (Replace with YOUR backend URL from Step 2.3)

### 4.3 Generate Domain
1. Go to "Settings" tab
2. Scroll to "Networking"
3. Click "Generate Domain"
4. You'll get something like: `https://malariadetector-frontend.up.railway.app`

### 4.4 Deploy
1. Click "Deploy"
2. Watch logs for successful build
3. Should see "Accepting connections at http://0.0.0.0:XXXX"

---

## Step 5: Update CORS (Important!)

### 5.1 Update Backend Code
Edit `app.py`:

```python
# Replace this line:
CORS(app, resources={r"/api/*": {"origins": "*"}})

# With:
import os
allowed_origins = os.environ.get('ALLOWED_ORIGINS', '*')
CORS(app, resources={r"/api/*": {"origins": allowed_origins}})
```

### 5.2 Set Environment Variable
1. Go to Railway backend service
2. Go to "Variables"
3. Add:
   ```
   ALLOWED_ORIGINS = https://your-frontend-url.railway.app
   ```

### 5.3 Redeploy
Backend will auto-redeploy with new CORS settings

---

## Step 6: Test Your Deployed App

1. Visit your frontend URL: `https://your-frontend-url.railway.app`
2. Click "Start Detection"
3. Upload a sample image
4. Verify analysis works
5. Test "Download Report"
6. Check all footer links

---

## Step 7: Custom Domain (Optional)

### For Frontend:
1. Go to Railway frontend service → Settings
2. Click "Add Custom Domain"
3. Enter: `www.malariaai.com` (your domain)
4. Add CNAME record to your DNS:
   ```
   Type: CNAME
   Name: www
   Value: your-app.up.railway.app
   ```

### For Backend:
1. Go to Railway backend service → Settings
2. Add custom domain: `api.malariaai.com`
3. Add CNAME record:
   ```
   Type: CNAME
   Name: api
   Value: your-backend.up.railway.app
   ```

4. Update frontend VITE_API_URL to `https://api.malariaai.com`

---

## 🎉 You're Live!

Your app is now deployed and accessible worldwide!

**Frontend**: https://your-frontend-url.railway.app
**Backend API**: https://your-backend-url.railway.app

---

## 📊 Monitoring

### View Logs:
1. Click on service
2. Go to "Deployments" tab
3. Click on latest deployment
4. View real-time logs

### Check Metrics:
1. Go to "Metrics" tab
2. See CPU, Memory, Network usage

### Set Up Alerts:
1. Go to project settings
2. Add notification webhooks
3. Connect to Discord/Slack

---

## 🔄 Continuous Deployment

Railway automatically redeploys when you push to GitHub!

```bash
# Make changes
git add .
git commit -m "Update feature"
git push

# Railway automatically detects and deploys!
```

---

## 💸 Costs

**Free Tier includes:**
- $5 credit per month
- Usually covers small hobby projects
- ~500GB network egress
- 512MB RAM per service

**If you need more:**
- Upgrade to Hobby plan: $5/month for $5 credit
- Or Pro plan: $20/month for $20 credit

---

## ❓ Troubleshooting

### Build Fails?
- Check logs in "Deployments" tab
- Verify `requirements.txt` has all dependencies
- Check Python version in `runtime.txt`

### Frontend Not Loading?
- Verify VITE_API_URL is set correctly
- Check that it starts with https://
- No trailing slash

### CORS Errors?
- Verify ALLOWED_ORIGINS includes frontend URL
- Check backend logs for CORS errors
- Make sure URLs match exactly (including https://)

### Model Not Found?
- Check if `public/malaria_model.pth` exists
- File size < 500MB for Railway
- Consider using Git LFS for large files

---

## 🎓 Next Steps

1. ✅ Set up custom domain
2. ✅ Add error tracking (Sentry)
3. ✅ Set up analytics (Google Analytics)
4. ✅ Configure backups
5. ✅ Add monitoring alerts
6. ✅ Set up staging environment

**Congratulations! Your AI app is live! 🎉**
