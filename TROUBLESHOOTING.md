# Troubleshooting Guide

## Common Errors and Solutions

### 1. Content Security Policy (CSP) Errors

**Error Messages:**
```
Note that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.
Evaluating a string as JavaScript violates the following Content Security Policy directive
```

**What it means:**
These are browser security warnings, often triggered by browser extensions (like Chrome DevTools extensions, ad blockers, etc.). They don't affect your application functionality.

**Solutions:**

✅ **Already Fixed:**
- Added `middleware.ts` with proper CSP headers
- Updated `next.config.ts` with security headers
- Configured Express server with CORS and security headers

✅ **If errors persist:**
1. **Disable browser extensions** temporarily to test
2. **Use incognito/private mode** to test without extensions
3. **Clear browser cache** and reload
4. **Ignore these warnings** - they're from extensions, not your app

### 2. 404 Errors for DevTools

**Error:**
```
Failed to load resource: the server responded with a status of 404 (Not Found)
Connecting to 'http://localhost:5000/.well-known/appspecific/com.chrome.devtools.json'
```

**What it means:**
Chrome DevTools is trying to connect to your Express server for debugging features. This is normal and doesn't affect functionality.

**Solutions:**

✅ **Already Fixed:**
- Added 404 handler to Express server
- Added health check endpoint at `/health`

✅ **To verify server is working:**
```bash
# Test the health endpoint
curl http://localhost:5000/health

# Should return: {"status":"ok","message":"Server is running"}
```

### 3. Items Not Showing on Menu Page

**Symptoms:**
- Menu page shows "No items available"
- Empty grid on items page

**Solutions:**

1. **Check Express server is running:**
   ```bash
   # Should see: Server running on http://localhost:5000
   ```

2. **Test API directly:**
   ```bash
   curl http://localhost:5000/api/items
   ```

3. **Check browser console** for fetch errors

4. **Verify port 5000 is not blocked** by firewall

### 4. Can't Access Add Item Page

**Symptoms:**
- Redirects to login page
- Shows 404 or blank page

**Solutions:**

1. **Make sure you're logged in:**
   - Email: admin@fastfood.com
   - Password: admin123

2. **Check cookies are enabled** in browser

3. **Clear cookies and login again:**
   - Open DevTools → Application → Cookies
   - Delete all cookies for localhost:3000
   - Login again

### 5. CORS Errors

**Error:**
```
Access to fetch at 'http://localhost:5000/api/items' from origin 'http://localhost:3000' 
has been blocked by CORS policy
```

**Solutions:**

✅ **Already Fixed:**
- Express server configured with proper CORS headers
- Allows localhost:3000 and localhost:3001

✅ **If error persists:**
1. **Restart Express server**
2. **Check server logs** for CORS configuration
3. **Verify fetch requests** include proper headers

### 6. Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::3000
Error: listen EADDRINUSE: address already in use :::5000
```

**Solutions:**

**For Next.js (port 3000):**
```bash
# Use different port
npm run dev -- -p 3001
```

**For Express (port 5000):**
1. Edit `server/server.js`
2. Change `const PORT = 5000;` to `const PORT = 5001;`
3. Update `.env.local`: `NEXT_PUBLIC_API_URL=http://localhost:5001`

**Or kill the process:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### 7. Images Not Loading

**Symptoms:**
- Broken image icons
- Images show placeholder

**Solutions:**

✅ **Already Fixed:**
- Next.js config allows images.unsplash.com
- Using Next.js Image component for optimization

✅ **If images still don't load:**
1. **Check internet connection** (images from Unsplash)
2. **Verify next.config.ts** has remotePatterns
3. **Restart Next.js dev server**

### 8. TypeScript Errors

**Solutions:**

1. **Restart TypeScript server** in VS Code:
   - Cmd/Ctrl + Shift + P
   - Type "TypeScript: Restart TS Server"

2. **Regenerate types:**
   ```bash
   npm run dev
   # Wait for types to generate
   ```

3. **Check tsconfig.json** is present

### 9. Styling Not Applied

**Symptoms:**
- No colors or styles
- Plain HTML appearance

**Solutions:**

1. **Check Tailwind is working:**
   - Look for `globals.css` import in layout.tsx
   - Verify `tailwind.config.ts` exists

2. **Clear Next.js cache:**
   ```bash
   rm -rf .next
   npm run dev
   ```

3. **Restart dev server**

### 10. Environment Variables Not Working

**Solutions:**

1. **Check .env.local exists** in project root

2. **Restart dev server** after changing env vars

3. **Use NEXT_PUBLIC_ prefix** for client-side vars:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

## Testing Checklist

Use this to verify everything works:

- [ ] Express server starts without errors
- [ ] Next.js dev server starts without errors
- [ ] Landing page loads with all 7 sections
- [ ] Menu page shows items from API
- [ ] Can click item to see details
- [ ] Login works with demo credentials
- [ ] Can access Add Item page after login
- [ ] Can submit new item successfully
- [ ] Toast notification appears
- [ ] New item appears in menu
- [ ] Logout works
- [ ] Redirected to login when accessing protected route

## Still Having Issues?

1. **Check all terminals** for error messages
2. **Look at browser console** (F12) for errors
3. **Verify all dependencies installed:**
   ```bash
   npm install
   cd server && npm install
   ```
4. **Try fresh start:**
   ```bash
   # Stop all servers
   # Delete node_modules
   rm -rf node_modules server/node_modules
   # Reinstall
   npm install
   cd server && npm install
   # Start fresh
   npm run server  # Terminal 1
   npm run dev     # Terminal 2
   ```

## Browser Extension Conflicts

Some extensions can cause CSP warnings:

- **React DevTools** - Safe to ignore warnings
- **Redux DevTools** - Safe to ignore warnings
- **Ad Blockers** - May block some requests
- **Privacy Extensions** - May interfere with cookies
- **Security Extensions** - May trigger CSP warnings

**Recommendation:** Test in incognito mode if you see persistent CSP errors.

## Performance Tips

1. **Keep both servers running** during development
2. **Use browser DevTools** to monitor network requests
3. **Check Console tab** for any errors
4. **Monitor Network tab** for failed requests
5. **Use React DevTools** to inspect component state

## Need More Help?

Check these files for detailed information:
- `README.md` - Complete documentation
- `QUICK_START.md` - Setup guide
- `FEATURES.md` - Feature details
- `PROJECT_SUMMARY.md` - Project overview
