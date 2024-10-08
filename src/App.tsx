import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import HomePage from './components/HomePage'
import About from './components/About'
import Contact from './components/Contact'
import Auth from './components/Auth'
import LanguageSwitcher from './components/LanguageSwitcher'
import ProductPreview from './components/ProductPreview'
import InputForm from './components/InputForm'
import { useTranslation } from 'react-i18next'

const App: React.FC = () => {
  // Simulated user for development
  const user = { uid: 'dev-user' };
  const { t } = useTranslation()

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-gray-800 font-sans relative">
        <header className="bg-black text-white py-2 px-4">
          <div className="container mx-auto text-sm text-center">
            {t('home.subtitle')}
          </div>
        </header>
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">SurviveWell</Link>
            <div className="flex items-center space-x-6">
              <Link to="/products" className="text-gray-600 hover:text-gray-800">{t('nav.products')}</Link>
              <Link to="/customize" className="text-gray-600 hover:text-gray-800">Customize Kit</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-800">{t('nav.about')}</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-800">{t('nav.contact')}</Link>
              {user ? (
                <button onClick={() => console.log('Sign out clicked')} className="text-gray-600 hover:text-gray-800">{t('nav.signOut')}</button>
              ) : (
                <Link to="/signin" className="text-gray-600 hover:text-gray-800">{t('nav.signIn')}</Link>
              )}
              <button className="text-gray-600 hover:text-gray-800">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPreview />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<Auth />} />
            <Route path="/customize" element={<InputForm onSubmit={() => console.log('Form submitted')} />} />
          </Routes>
        </main>

        <footer className="bg-gray-100 text-gray-600 py-8">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <p>&copy; 2024 SurviveWell. All rights reserved.</p>
          </div>
        </footer>

        <div className="fixed bottom-4 right-4 z-50">
          <LanguageSwitcher />
        </div>
      </div>
    </Router>
  )
}

export default App