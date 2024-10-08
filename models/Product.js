import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  },
  disasterType: {
    type: String,
    required: true
  },
  baseQuantity: {
    type: Number,
    default: 1
  }
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;