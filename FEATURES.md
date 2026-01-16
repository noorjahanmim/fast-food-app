# FastFood Application - Features Overview

## 🎨 Landing Page (7 Sections)

### 1. Hero Section
- Large banner with gradient background (red to orange)
- Main heading: "Welcome to FastFood"
- Tagline about fast delivery
- "Order Now" call-to-action button

### 2. About Us Section
- Company background and mission statement
- Information about quality and service
- Clean, centered layout

### 3. Featured Items Section
- 3 highlighted menu items
- Emoji icons for visual appeal
- Item names and descriptions
- Card-based layout with hover effects

### 4. Why Choose Us Section
- 3 key benefits:
  - ⚡ Fast Delivery (30 minutes or less)
  - 🌟 Quality Food (fresh ingredients)
  - 💰 Great Prices (affordable meals)
- Icon-based presentation

### 5. Menu Categories Section
- 8 food categories displayed in grid:
  - Burgers 🍔
  - Pizza 🍕
  - Chicken 🍗
  - Sides 🍟
  - Wraps 🌯
  - Drinks 🥤
  - Desserts 🍰
  - Salads 🥗
- Interactive cards with hover effects

### 6. Testimonials Section
- 3 customer reviews
- 5-star ratings
- Customer names and feedback
- Card-based layout

### 7. Call to Action Section
- Final conversion section
- Gradient background matching hero
- "View Full Menu" button
- Encourages immediate action

## 🔐 Authentication System

### Mock Login
- **Credentials:**
  - Email: admin@fastfood.com
  - Password: admin123
- Cookie-based session storage
- HTTP-only cookies for security
- 7-day session expiration

### Protected Routes
- `/add-item` - Requires authentication
- Automatic redirect to `/login` if not authenticated
- Server-side authentication check

### Login Page Features
- Clean, centered form design
- Email and password fields
- Visible demo credentials box
- Error message display
- Loading state during authentication
- Redirect to items page on success

## 📋 Menu Items Page (Public)

### Features
- Fetches data from Express API
- Responsive grid layout (1/2/3 columns)
- Each item card displays:
  - Product image
  - Item name
  - Price (highlighted in red)
  - Description
  - Category badge
- Hover effects for better UX
- Click to view details
- Fallback message if server is down

## 🔍 Item Details Page (Public)

### Features
- Large product image
- Full item information:
  - Name
  - Price
  - Category
  - Description
- "Add to Cart" button (UI only)
- "Continue Shopping" link
- Product details section
- Back to menu navigation
- 404 page for invalid items

## ➕ Add Item Page (Protected)

### Access Control
- Only accessible when logged in
- Automatic redirect to login if not authenticated
- Server-side route protection

### Form Features
- Fields:
  - Item Name (text, required)
  - Description (textarea, required)
  - Price (number with decimals, required)
  - Category (dropdown, required)
  - Image URL (url, required)
- Category options:
  - Burgers, Pizza, Chicken, Sides
  - Wraps, Drinks, Desserts, Salads
- Form validation
- Loading state during submission
- Toast notification on success/error
- Auto-redirect to menu after successful addition

### Toast Notifications
- Green toast for success
- Red toast for errors
- Auto-dismiss after 3 seconds
- Fixed position (top-right)

## 🎨 Design & Styling

### Color Scheme
- Primary: Red (#DC2626)
- Secondary: Yellow (#FBBF24)
- Accent: Orange (#F97316)
- Background: White & Gray shades

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- Hamburger menu on mobile
- Adaptive grid layouts

### Components
- **Navbar:**
  - Logo with emoji
  - Navigation links
  - Login/Logout button
  - Mobile menu toggle
  - Active route highlighting

- **Footer:**
  - 3-column layout
  - Quick links
  - Contact information
  - Copyright notice

## 🔌 API Integration

### Express Server Endpoints
- `GET /api/items` - List all items
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Add new item

### Next.js API Routes
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Data Flow
1. Next.js fetches from Express API
2. Server-side rendering for SEO
3. Client-side interactions for forms
4. Cookie-based session management

## 🚀 Performance Features

- Next.js Image optimization
- Server-side rendering (SSR)
- Static generation where possible
- Efficient data fetching
- Minimal client-side JavaScript

## 📱 User Experience

### Navigation Flow
1. Land on homepage → Browse sections
2. Click "Menu" → View all items
3. Click item → See details
4. Click "Login" → Authenticate
5. Access "Add Item" → Create new items

### Error Handling
- Graceful API failure messages
- 404 pages for missing items
- Form validation errors
- Authentication error messages
- Server connection status

## 🎯 Best Practices Implemented

- TypeScript for type safety
- Server-side authentication
- HTTP-only cookies
- Responsive design
- Accessible forms
- SEO-friendly structure
- Clean code organization
- Component reusability
- Error boundaries
- Loading states
