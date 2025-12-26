# Malaria Detector - Backend API

Flask + PyTorch backend for malaria detection.

## 🚀 Quick Start

### Local Development

1. **Create virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the server:**
   ```bash
   python app.py
   ```

Server will run on `http://localhost:5000`

## 📦 Deployment on Railway

### Option 1: Using Railway CLI

```bash
railway login
railway init
railway up
```

### Option 2: Using Railway Dashboard

1. Go to [railway.app](https://railway.app)
2. Click **"New Project"** → **"Deploy from GitHub"**
3. Select this repository
4. Railway will auto-detect Python and deploy

### Environment Variables

Set these in Railway dashboard:

```
PORT=5000
ALLOWED_ORIGINS=https://your-frontend-domain.vercel.app
```

## 📝 API Endpoints

- `GET /health` - Health check
- `POST /api/predict` - Analyze malaria sample
- `POST /api/generate-report` - Generate PDF report

## 🔧 Files

- `app.py` - Main Flask application
- `requirements.txt` - Python dependencies
- `Procfile` - Railway/Heroku deployment config
- `runtime.txt` - Python version
- `public/malaria_model.pth` - PyTorch model weights

## 📊 Model Architecture

- **Base:** ResNet50
- **Custom FC Layer:** 512 units
- **Output:** 2 classes (Positive/Negative)
- **Input Size:** 224x224 RGB images

## 🔒 CORS Configuration

By default allows all origins (`*`). For production, set `ALLOWED_ORIGINS` environment variable:

```
ALLOWED_ORIGINS=https://domain1.com,https://domain2.com
```

## 🐛 Troubleshooting

### Model not loading
- Ensure `public/malaria_model.pth` exists
- Check file size (should be ~90MB+)
- Verify Python version matches `runtime.txt`

### CORS errors
- Check `ALLOWED_ORIGINS` environment variable
- Verify frontend URL is correct

### Out of memory
- Reduce batch size in model inference
- Use Railway Pro plan for more RAM
