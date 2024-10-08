import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  res.json(req.mockData.products);
});

// Get a single product
router.get('/:id', (req, res) => {
  const product = req.mockData.products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Create a new product
router.post('/', (req, res) => {
  const newProduct = { id: uuidv4(), ...req.body };
  req.mockData.products.push(newProduct);
  res.status(201).json(newProduct);
});

// Update a product
router.put('/:id', (req, res) => {
  const index = req.mockData.products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    req.mockData.products[index] = { ...req.mockData.products[index], ...req.body };
    res.json(req.mockData.products[index]);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Delete a product
router.delete('/:id', (req, res) => {
  const index = req.mockData.products.findIndex(p => p.id === req.params.id);
  if (index !== -1) {
    req.mockData.products.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

export default router;