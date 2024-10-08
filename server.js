import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

const loadMockData = async (filename) => {
  try {
    const filePath = path.join(__dirname, 'mockData', filename);
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error loading mock data from ${filename}:`, error);
    return [];
  }
};

// Middleware to load mock data
app.use(async (req, res, next) => {
  try {
    req.mockData = {
      users: await loadMockData('users.json'),
      products: await loadMockData('products.json'),
      orders: await loadMockData('orders.json')
    };
    next();
  } catch (error) {
    console.error('Error loading mock data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Simple route for testing
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working' });
});

// Products route
app.get('/api/products', (req, res) => {
  res.json(req.mockData.products);
});

// Add more routes as needed...

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));