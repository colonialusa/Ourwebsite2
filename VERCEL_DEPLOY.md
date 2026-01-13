# Deploy to Vercel

## Quick Setup (5 minutes)

### 1. Prerequisites
- GitHub account
- Your code pushed to GitHub

### 2. Deploy Steps

#### Option A: Using Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. **Import** your GitHub repository
4. Vercel will auto-detect the configuration
5. Click **"Deploy"**
6. Done! ✅

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
pnpm add -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 3. Environment Variables (Optional)

If your app uses environment variables:

1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add your variables:
   - `PING_MESSAGE` (optional)
   - Any other custom env vars

### 4. Custom Domain (Optional)

1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## What's Configured

✅ **Frontend**: React app served from `dist/spa`  
✅ **Backend**: Express API routes available at `/api/*`  
✅ **Routing**: SPA routing handled automatically  
✅ **Auto-deploy**: Every push to `main` branch deploys automatically  

## API Endpoints

After deployment, your API will be available at:
- `https://your-app.vercel.app/api/ping`
- `https://your-app.vercel.app/api/demo`
- `https://your-app.vercel.app/api/services`
- `https://your-app.vercel.app/api/projects`
- `https://your-app.vercel.app/api/admin/*` (protected routes)

## Important Notes

### File Storage Limitation
⚠️ **Vercel serverless functions are ephemeral** - they don't have persistent file storage.

Your admin routes currently use local JSON files in `data/`:
- `data/projects.json`
- `data/services.json`
- `data/contacts.json`

**These won't persist on Vercel.** You have two options:

#### Option 1: Use Vercel KV/Postgres (Free tier available)
- [Vercel KV](https://vercel.com/docs/storage/vercel-kv) - Redis-compatible
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres) - PostgreSQL database

#### Option 2: Use External Database
- MongoDB Atlas (free tier)
- Supabase (free tier)
- Firebase (free tier)

### File Upload Storage
If you have image uploads (projects/services), you'll need:
- Vercel Blob Storage
- Cloudinary
- AWS S3

## Testing Locally

Before deploying, test the Vercel build:

```bash
# Install dependencies
pnpm install

# Build for Vercel
pnpm run vercel-build

# Test locally with Vercel CLI
vercel dev
```

## Performance

Expected performance on Vercel free tier:
- ⚡ First load: ~200-500ms
- ⚡ Subsequent loads: ~50-100ms (CDN cached)
- ⚡ API calls: ~50-200ms (serverless cold start)
- ⚡ Global CDN for fast worldwide access

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Run `pnpm run vercel-build` locally first

### API Routes Not Working
- Verify routes are under `/api/*` prefix
- Check function logs in Vercel dashboard
- Ensure serverless functions are under 50MB

### Data Not Persisting
- Implement database solution (see File Storage Limitation above)
- Use Vercel KV or external database

## Need Help?

Check Vercel documentation:
- [Vercel Documentation](https://vercel.com/docs)
- [Serverless Functions](https://vercel.com/docs/functions)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
