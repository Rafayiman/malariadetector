# Malaria Detector - Frontend

React + TypeScript + Vite frontend for malaria detection.

## 🚀 Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Create `.env` file:**
   ```env
   VITE_API_URL=http://localhost:5000
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

Frontend will run on `http://localhost:8080`

## 📦 Deployment on Vercel

### Option 1: Using Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click **"Import Project"**
3. Select this repository
4. Framework: **Vite**
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Add environment variable:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```

### Environment Variables (Vercel)

Set these in Vercel dashboard → Settings → Environment Variables:

```
VITE_API_URL=https://your-backend-url.railway.app
```

**Important:** Must start with `VITE_` to be exposed to the frontend.

## 🔧 Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## 📁 Project Structure

```
src/
├── components/        # React components
│   ├── ui/           # shadcn/ui components
│   ├── MalariaDetector.tsx
│   ├── ResultsDisplay.tsx
│   └── ...
├── pages/            # Page components
│   ├── LandingPage.tsx
│   ├── DetectionPage.tsx
│   ├── AboutPage.tsx
│   └── ...
├── lib/              # Utilities
│   ├── analysis.ts   # API client
│   └── utils.ts
├── hooks/            # Custom React hooks
└── assets/           # Images, fonts, etc.
```

## 🌐 Pages

- `/` - Landing page
- `/detect` - Detection page
- `/about` - About page
- `/history` - Analysis history
- `/contact` - Contact page
- `/privacy-policy` - Privacy policy
- `/terms-of-service` - Terms of service
- `/documentation` - User documentation

## 🎨 UI Components

Built with:
- **shadcn/ui** - Component library
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **TanStack Query** - Data fetching

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS config
- `tsconfig.json` - TypeScript config
- `components.json` - shadcn/ui config

## 🐛 Troubleshooting

### API connection errors
- Check `VITE_API_URL` in `.env`
- Verify backend is running
- Check CORS settings on backend

### Build fails
- Clear node_modules: `rm -rf node_modules package-lock.json`
- Reinstall: `npm install`
- Check Node version: `node --version` (should be 20.x+)

### Environment variables not working
- Must start with `VITE_` prefix
- Restart dev server after changing `.env`
- In Vercel, set in dashboard (not in `.env`)

## 📝 Notes

- Frontend expects backend at `VITE_API_URL`
- All environment variables must start with `VITE_`
- Build output goes to `dist/` folder
- Preview runs production build locally
