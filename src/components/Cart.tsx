import React from 'react'
import { ChevronLeft, Minus, Plus, Trash2, ShoppingBag, Package } from 'lucide-react'

interface Product {
  name: string
  quantity: number
  inStock: boolean
  image: string
  price: number
}

interface CartProps {
  items: Product[]
  onUpdateCart: (items: Product[]) => void
  onBack: () => void
}

const Cart: React.FC<CartProps> = ({ items, onUpdateCart, onBack }) => {
  const updateQuantity = (index: number, change: number) => {
    const newItems = [...items]
    newItems[index].quantity += change
    if (newItems[index].quantity <= 0) {
      newItems.splice(index, 1)
    }
    onUpdateCart(newItems)
  }

  const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index)
    onUpdateCart(newItems)
  }

  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Your Cart</h2>
      {items.length === 0 ? (
        <div className="text-center text-gray-600 py-8">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-xl">Your cart is empty.</p>
          <p className="mt-2">Add some items to get started!</p>
        </div>
      ) : (
        <div>
          <ul className="mb-8">
            {items.map((item, index) => (
              <li key={index} className="flex items-center py-4 border-b">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md mr-4" />
                ) : (
                  <div className="w-20 h-20 bg-gray-200 flex items-center justify-center rounded-md mr-4">
                    <Package className="w-8 h-8 text-gray-400" />
                  </div>
                )}
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => updateQuantity(index, -1)}
                    className="text-gray-500 hover:text-gray-700 transition duration-300"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="mx-3 text-lg font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(index, 1)}
                    className="text-gray-500 hover:text-gray-700 transition duration-300"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => removeItem(index)}
                    className="ml-6 text-red-500 hover:text-red-700 transition duration-300"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mb-8">
            <span className="text-xl font-semibold text-gray-800">Total:</span>
            <span className="text-2xl font-bold text-blue-600">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      )}
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="flex items-center text-blue-600 hover:text-blue-800 transition duration-300"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back to Recommendations
        </button>
        <button
          className="bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-600 transition duration-300 flex items-center"
          disabled={items.length === 0}
        >
          <ShoppingBag className="w-5 h-5 mr-2" />
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart