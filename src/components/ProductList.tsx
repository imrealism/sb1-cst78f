import React from 'react'
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react'

interface ProductListProps {
  onAddToCart: (item: string) => void
  onNext: () => void
  onPrev: () => void
}

const ProductList: React.FC<ProductListProps> = ({ onAddToCart, onNext, onPrev }) => {
  const products = [
    { id: 1, name: 'Emergency Water Supply', image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', available: true },
    { id: 2, name: 'Non-Perishable Food Kit', image: 'https://images.unsplash.com/photo-1584263347416-85a696b4eda7?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', available: true },
    { id: 3, name: 'First Aid Kit', image: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', available: true },
    { id: 4, name: 'Emergency Blanket', image: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80', available: false },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Survival Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className={`text-sm ${product.available ? 'text-green-600' : 'text-red-600'}`}>
                {product.available ? 'In Stock' : 'Out of Stock'}
              </p>
              <button
                onClick={() => onAddToCart(product.name)}
                className={`mt-4 w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  product.available
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-300 cursor-not-allowed'
                } transition duration-300`}
                disabled={!product.available}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={onPrev}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Back
        </button>
        <button
          onClick={onNext}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </button>
      </div>
    </div>
  )
}

export default ProductList