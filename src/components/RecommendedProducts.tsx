import React, { useState } from 'react'
import { ArrowLeft, ShoppingCart, AlertTriangle, CheckCircle, Package } from 'lucide-react'
import Cart from './Cart'

interface Product {
  name: string
  quantity: number
  inStock: boolean
  image: string
  price: number
}

interface RecommendedProductsProps {
  household: string
  duration: string
  disasterType: string
  onBack: () => void
}

const RecommendedProducts: React.FC<RecommendedProductsProps> = ({
  household,
  duration,
  disasterType,
  onBack,
}) => {
  const [showCart, setShowCart] = useState(false)
  const [cartItems, setCartItems] = useState<Product[]>([])

  const generateRecommendations = (): Product[] => {
    const baseItems = [
      { name: 'Water (1 gallon per person per day)', quantity: parseInt(duration) * household.split(',').length, inStock: true, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 1.99 },
      { name: 'Non-perishable food', quantity: parseInt(duration) * household.split(',').length * 3, inStock: true, image: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 2.99 },
      { name: 'First aid kit', quantity: 1, inStock: true, image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 29.99 },
      { name: 'Flashlight', quantity: household.split(',').length, inStock: true, image: 'https://images.unsplash.com/photo-1590534247854-e97d5e3feef6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 9.99 },
      { name: 'Battery-powered or hand-crank radio', quantity: 1, inStock: false, image: '', price: 24.99 },
      { name: 'Extra batteries', quantity: 2, inStock: true, image: 'https://images.unsplash.com/photo-1619641805634-b867f535071f?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 5.99 },
    ]

    const disasterSpecificItems: { [key: string]: Product[] } = {
      earthquake: [
        { name: 'Fire extinguisher', quantity: 1, inStock: true, image: 'https://images.unsplash.com/photo-1617135990779-925a8e9a8d16?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 39.99 },
        { name: 'Sturdy shoes', quantity: household.split(',').length, inStock: true, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 59.99 },
      ],
      hurricane: [
        { name: 'Plywood (for windows)', quantity: 1, inStock: false, image: '', price: 19.99 },
        { name: 'Waterproof container', quantity: 1, inStock: true, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 14.99 },
      ],
      flood: [
        { name: 'Rubber boots', quantity: household.split(',').length, inStock: true, image: 'https://images.unsplash.com/photo-1541711270778-22a08c4d2b76?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 34.99 },
        { name: 'Life jacket', quantity: household.split(',').length, inStock: false, image: '', price: 49.99 },
      ],
      wildfire: [
        { name: 'N95 respirator masks', quantity: household.split(',').length * 2, inStock: true, image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 1.99 },
        { name: 'Goggles', quantity: household.split(',').length, inStock: true, image: 'https://images.unsplash.com/photo-1610136649349-0f646f318053?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', price: 12.99 },
      ],
    }

    return [...baseItems, ...(disasterSpecificItems[disasterType] || [])]
  }

  const recommendations = generateRecommendations()

  const addToCart = (product: Product) => {
    if (product.inStock) {
      setCartItems(prevItems => {
        const existingItem = prevItems.find(item => item.name === product.name)
        if (existingItem) {
          return prevItems.map(item =>
            item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
          )
        } else {
          return [...prevItems, { ...product, quantity: 1 }]
        }
      })
    }
  }

  const goToCart = () => {
    setShowCart(true)
  }

  if (showCart) {
    return <Cart items={cartItems} onUpdateCart={setCartItems} onBack={() => setShowCart(false)} />
  }

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Recommended Survival Kit Items</h2>
      <p className="mb-6 text-center text-gray-600">
        Based on your input (Household: {household}, Duration: {duration}, Disaster Type: {disasterType})
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {recommendations.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            {item.image ? (
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <Package className="w-16 h-16 text-gray-400" />
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.name}</h3>
              <p className="text-gray-600 mb-2">Recommended: {item.quantity} {item.quantity > 1 ? 'units' : 'unit'}</p>
              <p className="text-lg font-bold text-blue-600 mb-4">${item.price.toFixed(2)}</p>
              {item.inStock ? (
                <div className="flex items-center justify-between">
                  <span className="text-green-500 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    In Stock
                  </span>
                  <button
                    onClick={() => addToCart(item)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300 flex items-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                </div>
              ) : (
                <span className="text-red-500 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-1" />
                  Out of Stock
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Customization
        </button>
        <button
          onClick={goToCart}
          className="flex items-center bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition duration-300"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Go to Cart ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </div>
    </div>
  )
}

export default RecommendedProducts