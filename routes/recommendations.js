import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

// Get product recommendations
router.post('/', async (req, res) => {
  try {
    const { household, duration, disasterType } = req.body;
    
    // This is a simple recommendation logic. In a real-world scenario,
    // you'd want to implement more sophisticated recommendation algorithms.
    let recommendations = await Product.find({ disasterType: disasterType });
    
    // Adjust quantities based on household size and duration
    recommendations = recommendations.map(product => ({
      ...product._doc,
      recommendedQuantity: Math.ceil(product.baseQuantity * parseInt(duration) * household.split(',').length)
    }));

    res.json(recommendations);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

export default router;