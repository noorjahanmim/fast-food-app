# FastFood - Next.js Fast Food Ordering Application

A modern fast food ordering application built with Next.js 15 (App Router), featuring a beautiful landing page, menu browsing, authentication, and admin capabilities.

## 🚀 Project Description

FastFood is a full-stack web application that allows users to browse a delicious menu of fast food items, view detailed product information, and (when authenticated) add new items to the menu. The application features a responsive design, mock authentication, and integrates with an Express.js backend API.

## ✨ Features

### Implemented Features

1. **Landing Page with 7 Sections**
   - Hero section with call-to-action
   - About Us section
   - Featured Items showcase
   - Why Choose Us benefits
   - Menu Categories grid
   - Customer Testimonials
   - Call to Action section
   - Responsive Navbar with login/menu links
   - Footer with contact information

2. **Authentication System**
   - Mock login with hardcoded credentials
   - Cookie-based session management
   - Protected routes for authenticated users
   - Automatic redirect for unauthenticated access
   - Login/Logout functionality

3. **Item List Page (Public)**
   - Displays all menu items from Express API
   - Beautiful card-based layout
   - Shows item name, description, price, image, and category
   - Responsive grid design
   - Click to view details

4. **Item Details Page (Public)**
   - Full product information display
   - Large product image
   - Price and category information
   - Add to cart button (UI only)
   - Back to menu navigation

5. **Protected Add Item Page**
   - Only accessible when logged in
   - Form to add new menu items
   - Fields: name, description, price, category, image URL
   - Toast notification on successful creation
   - Automatic redirect after submission
   - Data stored via Express.js server

## 🛠️ Technologies Used

- **Frontend:**
  - Next.js 15/16 (App Router)
  - React 19
  - TypeScript
  - Tailwind CSS
  - Next.js Image optimization

- **Backend:**
  - Express.js
  - CORS middleware
  - Body-parser

- **Authentication:**
  - Cookie-based sessions
  - Server-side route protection

## 📋 Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

## 🔧 Setup & Installation

### 1. Clone or navigate to the project directory

```bash
cd fast-food-app
```

### 2. Install Next.js dependencies

```bash
npm install
```

### 3. Install Express server dependencies

```bash
cd server
npm install
cd ..
```

### 4. Start the Express server (Terminal 1)

```bash
cd server
npm start
```

The server will run on `http://localhost:5000`

### 5. Start the Next.js development server (Terminal 2)

```bash
npm run dev
```

The application will run on `http://localhost:3000`

## 🔐 Login Credentials

Use these credentials to access protected features:

- **Email:** admin@fastfood.com
- **Password:** admin123

## 🗺️ Route Summary

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page with 7 sections |
| `/items` | Public | Browse all menu items |
| `/items/[id]` | Public | View single item details |
| `/login` | Public | Login page |
| `/add-item` | Protected | Add new menu items (requires login) |

## 📁 Project Structure

```
fast-food-app/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/route.ts
│   │       └── logout/route.ts
│   ├── items/
│   │   ├── [id]/page.tsx
│   │   └── page.tsx
│   ├── add-item/page.tsx
│   ├── login/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── AddItemForm.tsx
├── lib/
│   └── auth.ts
├── server/
│   ├── server.js
│   └── package.json
└── README.md
```

## 🎨 Features Breakdown

### Landing Page Sections
1. **Hero** - Eye-catching banner with main CTA
2. **About** - Company information and mission
3. **Featured Items** - Showcase of popular menu items
4. **Why Choose Us** - Key benefits (speed, quality, price)
5. **Menu Categories** - Visual category navigation
6. **Testimonials** - Customer reviews
7. **Call to Action** - Final conversion section

### Authentication Flow
- Users can log in with mock credentials
- Session stored in HTTP-only cookies
- Protected routes check authentication server-side
- Automatic redirect to login for unauthorized access
- Logout clears session and redirects to home

### Item Management
- **Browse:** View all items with images and details
- **Details:** Click any item to see full information
- **Add (Protected):** Authenticated users can add new items
- **Toast Notifications:** Success/error feedback on actions

## 🚀 API Endpoints

### Express Server (Port 5000)

- `GET /api/items` - Fetch all menu items
- `GET /api/items/:id` - Fetch single item by ID
- `POST /api/items` - Add new item (requires JSON body)

### Next.js API Routes

- `POST /api/auth/login` - Authenticate user
- `POST /api/auth/logout` - Clear user session

## 🎯 Future Enhancements

- Integrate NextAuth.js for Google OAuth
- Add shopping cart functionality
- Implement order placement and tracking
- Add user profile management
- Integrate payment processing
- Add real database (MongoDB/PostgreSQL)
- Implement image upload functionality
- Add search and filter capabilities

## 📝 Notes

- The Express server must be running for the menu items to display
- Images are loaded from Unsplash for demonstration
- Authentication is mock-based (not production-ready)
- Data is stored in memory and resets on server restart

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📄 License

This project is open source and available for educational purposes.
