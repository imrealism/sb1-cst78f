import React from 'react'
import { useTranslation } from 'react-i18next'
import { Shield, Users, Zap, Award, Globe, Leaf } from 'lucide-react'

const About: React.FC = () => {
  const { t } = useTranslation()

  const features = [
    { icon: Shield, title: t('about.protection.title'), description: t('about.protection.description') },
    { icon: Users, title: t('about.familyFocused.title'), description: t('about.familyFocused.description') },
    { icon: Zap, title: t('about.quickResponse.title'), description: t('about.quickResponse.description') },
    { icon: Award, title: 'Quality Assurance', description: 'All our products undergo rigorous testing to ensure the highest quality and reliability.' },
    { icon: Globe, title: 'Global Expertise', description: 'Our team of experts brings knowledge from various regions to address diverse emergency scenarios.' },
    { icon: Leaf, title: 'Eco-Friendly', description: 'We strive to provide sustainable and environmentally conscious survival solutions.' },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="relative h-80 mb-16">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Survival landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">{t('about.title')}</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-xl text-gray-600 leading-relaxed text-center">
            {t('about.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 transition-transform duration-300 hover:scale-105">
              <feature.icon className="w-16 h-16 mx-auto mb-6 text-blue-600" />
              <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">{feature.title}</h2>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-blue-600 text-white rounded-lg shadow-xl p-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Mission background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl leading-relaxed text-center">
              At SurviveWell, our mission is to empower individuals and families with the knowledge and tools they need to face any challenge. We believe that preparedness is not just about survival, but about thriving in the face of adversity.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About