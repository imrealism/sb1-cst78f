import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import CustomerReviews from './CustomerReviews'
import ImageCarousel from './ImageCarousel'

const HomePage: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div>
      <ImageCarousel />

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">{t('home.favorites')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add your favorite products here */}
          <div className="bg-gray-100 h-64"></div>
          <div className="bg-gray-100 h-64"></div>
          <div className="bg-gray-100 h-64"></div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/customize"
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            {t('home.cta')}
          </Link>
        </div>
      </div>

      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <CustomerReviews />
        </div>
      </div>
    </div>
  )
}

export default HomePage