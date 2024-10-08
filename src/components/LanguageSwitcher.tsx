import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-2 bg-white rounded-full shadow-md p-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-full ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'}`}
        aria-label="Switch to English"
      >
        🇬🇧
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => changeLanguage('th')}
        className={`px-2 py-1 rounded-full ${i18n.language === 'th' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:text-gray-800'}`}
        aria-label="เปลี่ยนเป็นภาษาไทย"
      >
        🇹🇭
      </button>
    </div>
  );
};

export default LanguageSwitcher;