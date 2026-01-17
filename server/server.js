const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:3000', 
    'http://localhost:3001', 
    'https://fast-food-app-xxxxx.vercel.app',
    /^https:\/\/.*\.vercel\.app$/,
    /^https:\/\/.*\.railway\.app$/
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());

// Security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

let items = [
  {
    id: 1,
    name: "Classic Burger",
    description: "Juicy beef patty with lettuce, tomato, and special sauce",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    category: "Burgers"
  },
  {
    id: 2,
    name: "Cheese Pizza",
    description: "Hand-tossed pizza with mozzarella and tomato sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
    category: "Pizza"
  },
  {
    id: 3,
    name: "Crispy Fries",
    description: "Golden french fries with sea salt",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
    category: "Sides"
  },
  {
    id: 4,
    name: "Chicken Wings",
    description: "Spicy buffalo wings with ranch dressing",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400",
    category: "Chicken"
  },
  {
    id: 5,
    name: "Veggie Wrap",
    description: "Fresh vegetables wrapped in a soft tortilla",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400",
    category: "Wraps"
  },
  {
    id: 6,
    name: "Chocolate Shake",
    description: "Creamy chocolate milkshake topped with whipped cream",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400",
    category: "Drinks"
  }
];

// Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Get single item
app.get('/api/items/:id', (req, res) => {
  const item = items.find(i => i.id === parseInt(req.params.id));
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Add new item
app.post('/api/items', (req, res) => {
  const newItem = {
    id: items.length + 1,
    ...req.body
  };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
