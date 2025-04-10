'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ro: {
    home: 'Acasă',
    about: 'Despre noi',
    office: 'Catering pentru birou',
    pomana: 'Cene commemorative',
    contact: 'Contact'
  },
  ru: {
    home: 'Главная',
    about: 'О нас',
    office: 'Кейтеринг для офиса',
    pomana: 'Поминальные обеды',
    contact: 'Контакты'
  },
  it: {
    home: 'Home',
    about: 'Chi siamo',
    office: 'Catering per ufficio',
    pomana: 'Cene commemorative',
    contact: 'Contatti'
  }
};

export default function Navbar() {
  const { locale, setLocale } = useLanguage();
  const t = translations[locale as keyof typeof translations] || translations.ro;

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
  };

  return (
    <nav className="bg-blue-900 text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold">
                Grill House
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.home}
              </Link>
              <Link href="/about" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.about}
              </Link>
              <Link href="/services/office" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.office}
              </Link>
              <Link href="/services/pomana" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.pomana}
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium">
                {t.contact}
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex space-x-2">
              <button
                onClick={() => handleLanguageChange('ro')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  locale === 'ro' 
                    ? 'bg-white text-blue-900' 
                    : 'bg-blue-800 text-white hover:bg-blue-700'
                }`}
              >
                RO
              </button>
              <button
                onClick={() => handleLanguageChange('ru')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  locale === 'ru' 
                    ? 'bg-white text-blue-900' 
                    : 'bg-blue-800 text-white hover:bg-blue-700'
                }`}
              >
                RU
              </button>
              <button
                onClick={() => handleLanguageChange('it')}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  locale === 'it' 
                    ? 'bg-white text-blue-900' 
                    : 'bg-blue-800 text-white hover:bg-blue-700'
                }`}
              >
                IT
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 