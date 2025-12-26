# Quick Deployment Script for Railway

# 1. Install Railway CLI
# npm install -g @railway/cli

# 2. Login to Railway
railway login

# 3. Initialize project
railway init

# 4. Deploy backend
railway up

# 5. Get backend URL
railway domain

# 6. Update frontend environment variable with backend URL
# railway variables set VITE_API_URL=https://your-backend-url

# 7. Deploy frontend (create new service)
railway service create frontend
railway up

# Done! Your app is deployed on Railway
