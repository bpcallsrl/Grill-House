'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ro: {
    footer: 'Site Creat de BpCall Srl Strada Alexandru Cel bun 7 Chișinău ©2024'
  },
  ru: {
    footer: 'Сайт создан BpCall Srl улица Александру чел Бун 7 Кишинёв ©2024'
  },
  it: {
    footer: 'Sito Creato da BpCall Srl Strada Alexandru Cel bun 7 Chisinau ©2024'
  }
};

const Footer = () => {
  const { locale } = useLanguage();
  const t = translations[locale as keyof typeof translations] || translations.ro;

  return (
    <div className="mt-8 bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 text-center">
        <p className="text-white/90 text-sm font-medium">
          {t.footer}
        </p>
      </div>
    </div>
  );
};

export default Footer; 