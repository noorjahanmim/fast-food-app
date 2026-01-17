# Quick Deploy to Railway - 5 Minutes

## Step 1: Create Server Repository

```bash
# Create new directory
mkdir fast-food-server
cd fast-food-server

# Copy these files from fast-food-app/server/:
# - server.js
# - package.json  
# - railway.json
# - .gitignore

# Initialize Git
git init
git add .
git commit -m "Initial server commit"
```

## Step 2: Push to GitHub

1. Go to https://github.com/new
2. Repository name: **fast-food-server**
3. Click "Create repository"
4. Run these commands:

```bash
git remote add origin https://github.com/YOUR_USERNAME/fast-food-server.git
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Railway

1. Go to https://railway.app
2. Login with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose **fast-food-server**
6. Click "Deploy"

## Step 4: Get Your URL

After deployment (2-3 minutes):
- Your API will be live at: `https://your-app-name.railway.app`
- Test it: `https://your-app-name.railway.app/health`

## Step 5: Update Next.js App

Edit `fast-food-app/.env.local`:
```
NEXT_PUBLIC_API_URL=https://your-app-name.railway.app
```

## Done! 🎉

Your Express server is now live on Railway!

**API Endpoints:**
- `https://your-app-name.railway.app/api/items`
- `https://your-app-name.railway.app/api/items/1`
- `https://your-app-name.railway.app/health`

**Next:** Deploy your Next.js app to Vercel and update the API URL!