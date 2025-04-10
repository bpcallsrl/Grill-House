'use client';

import React from 'react';
import { useLanguage } from '../../../context/LanguageContext';

const translations = {
  ro: {
    title: 'Promoții pentru Biroul Tău',
    description: 'Oferte speciale pentru companiile care aleg serviciile noastre',
    specialOffer: {
      title: 'Ofertă Specială pentru Companii',
      description: 'Prezintă o companie care contractează minimum 20 de porții pe zi pentru o lună și primești',
      highlight: '10 ZILE DE PRÂNZ GRATUIT',
      terms: 'Ofertă valabilă pentru contracte noi'
    },
    backButton: 'Înapoi la pagina anterioară'
  },
  ru: {
    title: 'Акции для Вашего Офиса',
    description: 'Специальные предложения для компаний, выбирающих наши услуги',
    specialOffer: {
      title: 'Специальное Предложение для Компаний',
      description: 'Приведите компанию, которая заключит контракт минимум на 20 порций в день на месяц, и получите',
      highlight: '10 ДНЕЙ БЕСПЛАТНЫХ ОБЕДОВ',
      terms: 'Предложение действительно для новых контрактов'
    },
    backButton: 'Вернуться на предыдущую страницу'
  },
  it: {
    title: 'Promozioni per il Tuo Ufficio',
    description: 'Offerte speciali per le aziende che scelgono i nostri servizi',
    specialOffer: {
      title: 'Offerta Speciale per Aziende',
      description: 'Presenta un\'azienda che contrattualizza almeno 20 porzioni al giorno per un mese, e riceverai',
      highlight: '10 GIORNI DI PRANZO GRATUITO',
      terms: 'Offerta valida per nuovi contratti'
    },
    backButton: 'Ritorna alla pagina precedente'
  }
};

export default function PromotionsPage() {
  const { locale } = useLanguage();
  const t = translations[locale as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
          <p className="text-xl text-gray-600">{t.description}</p>
        </div>

        {/* Special Offer Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative p-8 md:p-12">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute right-0 bottom-0 w-40 h-40 transform translate-x-1/3 translate-y-1/3">
                  <svg viewBox="0 0 100 100" className="text-white">
                    <path d="M100 0v100H0V0h100z" fill="currentColor"/>
                  </svg>
                </div>
              </div>

              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
                  {t.specialOffer.title}
                </h2>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 md:p-8 text-center">
                  <p className="text-xl md:text-2xl text-white mb-6">
                    {t.specialOffer.description}
                  </p>
                  
                  <div className="bg-white text-red-600 rounded-lg p-4 md:p-6 mb-6 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <p className="text-2xl md:text-4xl font-bold">
                      {t.specialOffer.highlight}
                    </p>
                  </div>
                  
                  <p className="text-white/80 text-sm italic">
                    {t.specialOffer.terms}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center mt-8">
            <a
              href="/services/office"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <svg 
                className="w-5 h-5 mr-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              {t.backButton}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 