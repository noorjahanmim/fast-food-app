# 🚀 START YOUR WEBSITE HERE

## Your Website is Ready! Follow These Steps:

### Step 1: Open TWO Terminal Windows

You need 2 separate terminal windows (Command Prompt or PowerShell)

### Step 2: Start the Backend Server (Terminal 1)

```bash
cd fast-food-app\server
node server.js
```

You should see: `Server running on http://localhost:4000`

**If you get "port in use" error:**
- Kill all Node processes first
- Or change PORT in `server/server.js` to any free port (like 3001, 4001, 5555, etc.)
- Then update `.env.local` with the new port

### Step 3: Start the Website (Terminal 2)

```bash
cd fast-food-app
npm run dev
```

You should see: `Ready in...` and `Local: http://localhost:3000`

### Step 4: Open Your Browser

Go to: **http://localhost:3000**

## 🎉 Your Website Features:

1. **Landing Page** - 7 beautiful sections
2. **Menu** - Click "Menu" in navbar to see food items
3. **Item Details** - Click any food item to see details
4. **Login** - Click "Login" and use:
   - Email: `admin@fastfood.com`
   - Password: `admin123`
5. **Add Item** - After login, click "Add Item" to add new menu items

## ⚠️ Troubleshooting

### Problem: "Port already in use"

**Solution 1 - Kill all Node processes:**
```bash
# Windows Command Prompt
taskkill /F /IM node.exe

# Then restart both servers
```

**Solution 2 - Use different port:**
1. Edit `server/server.js` - change `const PORT = 4000;` to `const PORT = 5555;`
2. Edit `.env.local` - change to `NEXT_PUBLIC_API_URL=http://localhost:5555`
3. Restart both servers

### Problem: Menu shows "No items available"

Make sure the Express server (Terminal 1) is running!

### Problem: Can't access Add Item page

Make sure you're logged in first with the credentials above.

## 📁 Project Location

Your website is in: `C:\Assignment\nextJsPractice\fast-food-app`

## 🌐 URLs

- **Website:** http://localhost:3000
- **API Server:** http://localhost:4000
- **Health Check:** http://localhost:4000/health

Enjoy your FastFood website! 🍔🍕🍟
