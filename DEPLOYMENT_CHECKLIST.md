# 📋 Deployment Checklist

Use this checklist to ensure smooth deployment.

## Pre-Deployment

### Code Preparation
- [ ] All code committed to Git
- [ ] `.env` file NOT committed (in .gitignore)
- [ ] `requirements.txt` up to date
- [ ] `package.json` has correct scripts
- [ ] Model file `public/malaria_model.pth` exists
- [ ] CORS configured for production
- [ ] All tests passing locally

### Files Check
- [ ] `Procfile` exists (for Railway/Render)
- [ ] `runtime.txt` exists (Python version)
- [ ] `vercel.json` or `netlify.toml` (if using those)
- [ ] `.env.example` created (for reference)

### GitHub
- [ ] Repository created on GitHub
- [ ] Code pushed to `main` branch
- [ ] Large files handled (Git LFS if needed)
- [ ] Repository is public or accessible to deployment platform

---

## Backend Deployment

### Railway/Render Setup
- [ ] Account created
- [ ] Connected to GitHub
- [ ] Repository selected
- [ ] Service created

### Configuration
- [ ] Environment variables set:
  - [ ] `PORT=5000`
  - [ ] `ALLOWED_ORIGINS` (frontend URL)
  - [ ] Any other secrets
- [ ] Custom domain generated or configured
- [ ] Backend URL noted down

### Verification
- [ ] Deployment successful
- [ ] `/health` endpoint working
- [ ] Model loaded (check logs)
- [ ] No errors in logs
- [ ] Can access from browser

---

## Frontend Deployment

### Platform Setup (Vercel/Netlify/Railway)
- [ ] Account created
- [ ] Connected to GitHub
- [ ] Repository selected

### Build Configuration
- [ ] Build command: `npm run build`
- [ ] Output directory: `dist`
- [ ] Node version: 20.x

### Environment Variables
- [ ] `VITE_API_URL` set to backend URL
- [ ] URL includes `https://`
- [ ] No trailing slash on URL

### Domain
- [ ] Domain generated
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active (HTTPS)

### Verification
- [ ] Site loads correctly
- [ ] No console errors
- [ ] Can navigate all pages
- [ ] Footer links work

---

## Integration Testing

### Basic Functionality
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Can access Detection page
- [ ] Upload button works

### AI Detection
- [ ] Can upload image
- [ ] Analysis starts
- [ ] Results display correctly
- [ ] Confidence score shows
- [ ] Prediction is accurate

### Report Features
- [ ] Can add patient info
- [ ] Download Report button works
- [ ] PDF downloads successfully
- [ ] PDF contains correct data
- [ ] Images show in PDF

### All Pages
- [ ] Home page ✓
- [ ] Detection page ✓
- [ ] History page ✓
- [ ] About page ✓
- [ ] Contact page ✓
- [ ] Privacy Policy ✓
- [ ] Terms of Service ✓
- [ ] Documentation ✓

### Footer Navigation
- [ ] All footer links work
- [ ] External links open in new tab
- [ ] No broken links
- [ ] Mobile responsive

---

## Performance & Security

### Performance
- [ ] Page load time < 3 seconds
- [ ] Images optimized
- [ ] API response time < 2 seconds
- [ ] No memory leaks

### Security
- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] No sensitive data in frontend
- [ ] Environment variables secure
- [ ] No API keys in code

### SEO & Meta
- [ ] Page titles set
- [ ] Meta descriptions added
- [ ] Favicon configured
- [ ] Open Graph tags (optional)

---

## Monitoring Setup

### Error Tracking
- [ ] Sentry configured (optional)
- [ ] Error logging enabled
- [ ] Alerts set up

### Analytics
- [ ] Google Analytics added (optional)
- [ ] User tracking enabled
- [ ] Conversion tracking setup

### Uptime Monitoring
- [ ] UptimeRobot configured (optional)
- [ ] Health check endpoint monitored
- [ ] Alert notifications setup

---

## Post-Deployment

### Documentation
- [ ] Deployment URLs documented
- [ ] Admin credentials stored securely
- [ ] API documentation updated
- [ ] Changelog maintained

### Team Communication
- [ ] Stakeholders notified
- [ ] Demo prepared
- [ ] User guide shared
- [ ] Support contacts updated

### Backup & Recovery
- [ ] Backup strategy defined
- [ ] Database backups (if applicable)
- [ ] Rollback plan documented
- [ ] Disaster recovery tested

---

## Maintenance

### Regular Tasks
- [ ] Monitor error logs weekly
- [ ] Check performance metrics
- [ ] Update dependencies monthly
- [ ] Review user feedback
- [ ] Test backups quarterly

### Updates
- [ ] Security patches applied
- [ ] Feature updates planned
- [ ] Bug fixes prioritized
- [ ] Model retraining scheduled

---

## 🎉 Go Live!

When all items above are checked:

1. Announce launch
2. Share deployment URLs
3. Monitor for first 24 hours
4. Collect user feedback
5. Celebrate! 🚀

---

## Quick Reference

**Frontend URL**: ___________________________________

**Backend URL**: ___________________________________

**Git Repository**: ___________________________________

**Deployment Platform**: ___________________________________

**Deployment Date**: ___________________________________

---

## Support Contacts

**Railway Support**: https://railway.app/help
**Vercel Support**: https://vercel.com/support
**Netlify Support**: https://www.netlify.com/support

---

**Good luck with your deployment! 🌟**
