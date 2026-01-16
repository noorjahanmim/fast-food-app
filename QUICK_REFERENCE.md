# Quick Reference Card

## 🚀 Start the Application

```bash
# Terminal 1: Express Server
npm run server

# Terminal 2: Next.js App
npm run dev
```

**URLs:**
- Frontend: http://localhost:3000
- Backend: http://localhost:5000
- Health Check: http://localhost:5000/health

## 🔐 Login Credentials

```
Email:    admin@fastfood.com
Password: admin123
```

## 📁 Key Files

### Configuration
- `.env.local` - Environment variables
- `next.config.ts` - Next.js config + security headers
- `middleware.ts` - CSP headers
- `server/server.js` - Express API server

### Components
- `components/Navbar.tsx` - Navigation bar
- `components/Footer.tsx` - Footer
- `components/AddItemForm.tsx` - Add item form

### Pages
- `app/page.tsx` - Landing page (7 sections)
- `app/items/page.tsx` - Menu list (public)
- `app/items/[id]/page.tsx` - Item details (public)
- `app/login/page.tsx` - Login page
- `app/add-item/page.tsx` - Add item (protected)

### Utilities
- `lib/auth.ts` - Authentication helpers
- `lib/api.ts` - API client

## 🔌 API Endpoints

### Express (Port 5000)
```
GET  /health           - Server health check
GET  /api/items        - Get all items
GET  /api/items/:id    - Get single item
POST /api/items        - Add new item
```

### Next.js API Routes
```
POST /api/auth/login   - User login
POST /api/auth/logout  - User logout
```

## 🎨 Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page |
| `/items` | Public | Menu list |
| `/items/[id]` | Public | Item details |
| `/login` | Public | Login page |
| `/add-item` | Protected | Add new item |

## 🛠️ Common Commands

```bash
# Install dependencies
npm install
npm run server:install

# Development
npm run dev              # Start Next.js
npm run server           # Start Express

# Production
npm run build            # Build Next.js
npm start                # Start production server

# Utilities
npm run lint             # Run ESLint
```

## 🐛 Quick Troubleshooting

### Items not showing?
```bash
# Check Express server is running
curl http://localhost:5000/api/items
```

### Can't login?
- Clear cookies in browser
- Use exact credentials: admin@fastfood.com / admin123

### Port in use?
```bash
# Use different port
npm run dev -- -p 3001
```

### CSP warnings?
- **Ignore them** - they're from browser extensions
- Test in incognito mode if concerned

## 📊 Project Structure

```
fast-food-app/
├── app/                    # Next.js pages
│   ├── page.tsx           # Landing page
│   ├── login/             # Login page
│   ├── items/             # Menu pages
│   ├── add-item/          # Protected page
│   └── api/auth/          # Auth API routes
├── components/            # React components
├── lib/                   # Utilities
├── server/                # Express backend
│   └── server.js         # API server
├── middleware.ts          # CSP headers
├── next.config.ts         # Next.js config
└── .env.local            # Environment vars
```

## ✅ Testing Checklist

- [ ] Landing page loads (7 sections)
- [ ] Menu shows items
- [ ] Item details work
- [ ] Login works
- [ ] Add item works (after login)
- [ ] Logout works
- [ ] Protected route redirects

## 📚 Documentation

- `README.md` - Full documentation
- `QUICK_START.md` - Setup guide
- `FEATURES.md` - Feature details
- `TROUBLESHOOTING.md` - Problem solving
- `CSP_ERRORS_EXPLAINED.md` - CSP warnings
- `FIXES_APPLIED.md` - Security fixes
- `PROJECT_SUMMARY.md` - Project overview

## 🎯 Key Features

✅ 7-section landing page
✅ Mock authentication
✅ Public menu browsing
✅ Protected admin features
✅ Toast notifications
✅ Responsive design
✅ Security headers
✅ CORS configured
✅ TypeScript support

## 🔒 Security Features

- Content Security Policy (CSP)
- CORS protection
- HTTP-only cookies
- XSS protection
- Clickjacking prevention
- MIME sniffing prevention
- Server-side route protection

## 💡 Tips

1. **Keep both servers running** during development
2. **Use browser DevTools** to debug
3. **Check console** for errors
4. **Test in incognito** to avoid extension conflicts
5. **Read TROUBLESHOOTING.md** for common issues

## 🎉 Quick Test

```bash
# 1. Start servers
npm run server &
npm run dev

# 2. Test API
curl http://localhost:5000/health

# 3. Open browser
# Visit: http://localhost:3000

# 4. Test features
# - Browse landing page
# - View menu
# - Login
# - Add item
```

## 📞 Need Help?

1. Check `TROUBLESHOOTING.md`
2. Check `CSP_ERRORS_EXPLAINED.md`
3. Review browser console
4. Check server logs
5. Test in incognito mode

---

**Remember:** CSP warnings from browser extensions are normal and safe to ignore! 🎯
