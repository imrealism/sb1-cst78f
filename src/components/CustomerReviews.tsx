import React from 'react'
import { useTranslation } from 'react-i18next'
import { Star } from 'lucide-react'

interface Review {
  id: number
  name: string
  rating: number
  comment: string
  avatar: string
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alex Johnson",
    rating: 5,
    comment: "SurviveWell's kit saved my family during an unexpected storm. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 2,
    name: "Sam Lee",
    rating: 4,
    comment: "Great products, fast shipping. The emergency blanket is top-notch.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    id: 3,
    name: "Emily Chen",
    rating: 5,
    comment: "The comprehensive kit and helpful tips made me feel truly prepared. Thank you!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
]

const CustomerReviews: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <h3 className="text-2xl font-semibold mb-6 text-center">{t('reviews.title')}</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <h4 className="font-semibold">{review.name}</h4>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CustomerReviews