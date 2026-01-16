# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

```bash
# Install Next.js dependencies
npm install

# Install Express server dependencies
npm run server:install
```

### Step 2: Start the Express Server

Open a terminal and run:

```bash
npm run server
```

You should see: `Server running on http://localhost:5000`

### Step 3: Start the Next.js App

Open a **new terminal** and run:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser!

## 🔐 Login to Test Protected Features

- **Email:** admin@fastfood.com
- **Password:** admin123

## ✅ What to Test

1. **Landing Page** - Browse the 7 sections
2. **Menu** - Click "Menu" in navbar to see all items
3. **Item Details** - Click any item to see full details
4. **Login** - Use credentials above
5. **Add Item** - After login, click "Add Item" to create new menu items

## 🎯 Troubleshooting

**Items not showing?**
- Make sure the Express server is running on port 5000
- Check terminal for any errors

**Can't access Add Item page?**
- Make sure you're logged in first
- Use the credentials provided above

**Port already in use?**
- Next.js: Change port with `npm run dev -- -p 3001`
- Express: Edit `server/server.js` and change PORT value

Enjoy your FastFood app! 🍔🍕🍟
