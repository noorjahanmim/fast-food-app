# Deploy Express Server to Railway

## Prerequisites

1. **GitHub Account** - Create one at https://github.com
2. **Railway Account** - Sign up at https://railway.app (use your GitHub account)
3. **Git installed** - Check with `git --version`

## Step 1: Create Separate Repository for Server

Since Railway deploys from the root of a repository, we need to create a separate repo for the server.

### Option A: Create New Repository (Recommended)

1. Create a new folder for the server:
   ```bash
   mkdir fast-food-server
   cd fast-food-server
   ```

2. Copy server files:
   ```bash
   # Copy these files from fast-food-app/server/ to fast-food-server/
   - server.js
   - package.json
   - railway.json
   - .gitignore
   ```

3. Initialize Git:
   ```bash
   git init
   git add .
   git commit -m "Initial server commit"
   ```

4. Create GitHub repository:
   - Go to https://github.com/new
   - Repository name: `fast-food-server`
   - Click "Create repository"

5. Push to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/fast-food-server.git
   git branch -M main
   git push -u origin main
   ```

### Option B: Use Existing Repository with Subdirectory

If you want to keep everything in one repo, Railway can deploy from a subdirectory.

## Step 2: Deploy to Railway

### Method 1: Railway Dashboard (Recommended)

1. Go to https://railway.app
2. Click "Login" and sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Choose your `fast-food-server` repository
6. Railway will automatically detect it's a Node.js project
7. Click "Deploy"

### Method 2: Railway CLI

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login
railway login

# Deploy from server directory
cd fast-food-server  # or cd fast-food-app/server
railway deploy
```

## Step 3: Configure Environment Variables (Optional)

In Railway dashboard:
1. Go to your project
2. Click "Variables" tab
3. Add any environment variables if needed:
   - `NODE_ENV=production`
   - `PORT` (Railway sets this automatically)

## Step 4: Get Your Railway URL

After deployment:
1. Go to your Railway project dashboard
2. Click "Settings" tab
3. Find your app URL: `https://your-app-name.railway.app`

## Step 5: Update Next.js App

Update your Next.js app to use the Railway URL:

1. Edit `fast-food-app/.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://your-app-name.railway.app
   ```

2. Or update for production deployment on Vercel:
   - Add environment variable in Vercel dashboard
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://your-app-name.railway.app`

## Step 6: Test Your Deployed API

Test these endpoints:
- `https://your-app-name.railway.app/health` - Should return server status
- `https://your-app-name.railway.app/api/items` - Should return food items
- `https://your-app-name.railway.app/api/items/1` - Should return single item

## Railway Features

✅ **Automatic Deployments** - Pushes to GitHub trigger deployments
✅ **Custom Domains** - Add your own domain
✅ **Environment Variables** - Secure config management
✅ **Logs** - View application logs
✅ **Metrics** - Monitor performance
✅ **Database** - Add PostgreSQL, MySQL, etc.

## Troubleshooting

### Build Fails
- Check logs in Railway dashboard
- Ensure `package.json` has correct `start` script
- Verify Node.js version compatibility

### CORS Errors
- Server is configured to allow Vercel domains
- Add your specific domain if needed

### Port Issues
- Railway automatically sets `PORT` environment variable
- Server uses `process.env.PORT || 4000`

### Health Check Fails
- Endpoint `/health` should return 200 status
- Check if server is binding to `0.0.0.0`

## Adding a Database (Optional)

1. In Railway dashboard, click "New"
2. Select "Database" → "PostgreSQL" (or your preference)
3. Railway will provide connection details
4. Update your server code to use the database

## Custom Domain (Optional)

1. Go to Railway project settings
2. Click "Domains" tab
3. Add your custom domain
4. Configure DNS records as shown

## Monitoring

Railway provides:
- **Logs** - Real-time application logs
- **Metrics** - CPU, memory, network usage
- **Deployments** - History of all deployments
- **Environment** - Manage variables and secrets

## Pricing

- **Free Tier**: $5 credit per month
- **Pro Plan**: $20/month for more resources
- **Pay-as-you-go** for usage beyond free tier

## File Structure for Railway

Your server repository should look like:
```
fast-food-server/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── railway.json       # Railway configuration
├── .gitignore         # Git ignore rules
└── README.md          # Documentation
```

## Environment Variables

Railway automatically provides:
- `PORT` - Port to bind to
- `RAILWAY_ENVIRONMENT` - Current environment
- `RAILWAY_PROJECT_ID` - Project identifier

## Updating Your Deployment

After making changes:
```bash
git add .
git commit -m "Update server"
git push
```

Railway will automatically redeploy!

## Complete Deployment URLs

After both deployments:
- **Frontend (Vercel)**: `https://fast-food-app.vercel.app`
- **Backend (Railway)**: `https://fast-food-server.railway.app`

## Security Considerations

✅ CORS configured for production domains
✅ Security headers added
✅ Environment variables for sensitive data
⚠️ Add rate limiting for production
⚠️ Add authentication for admin endpoints
⚠️ Use HTTPS only in production

## Next Steps

1. **Add Database** - PostgreSQL, MongoDB, etc.
2. **Add Authentication** - JWT tokens, OAuth
3. **Add Logging** - Winston, Morgan
4. **Add Monitoring** - Error tracking, analytics
5. **Add Tests** - Unit and integration tests

## Support

- **Railway Docs**: https://docs.railway.app
- **Railway Discord**: https://discord.gg/railway
- **GitHub Issues**: For code-related problems

Your Express server will be live and accessible from anywhere! 🚀