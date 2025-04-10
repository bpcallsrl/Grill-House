'use client';

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Image from 'next/image';

const translations = {
  ro: {
    title: 'Cene commemorative cu livrare la domiciliu',
    description: 'Oferim servicii complete de catering pentru evenimente commemorative, cu livrare la domiciliu în toată Chișinăul.',
    emotionalQuote: 'Să ne amintim de cei dragi cu căldura gusturilor tradiționale, onorând memoria lor prin mâncarea care ne-a hrănit sufletele.',
    boxClassicCarne: 'Box Clasic Carne',
    boxClassicPost: 'Box Clasic de Post',
    menuItems: {
      sarmale: 'Sarmale cu carne 200g',
      sarmaleDePost: 'Sarmale de post 200g',
      salataOlivie: 'Salată Olivie 130g',
      placinta: 'Plăcintă asorti 70g',
      batutaPui: 'Bătută de pui 50g',
      parjoala: 'Pârjoală de casă 60g',
      pesteCopt: 'Pește copt 50g',
      parjoalaPost: 'Pârjoală de post 60g',
      legume: 'Roșii + ardei 40g'
    },
    ritualTitle: 'Ritualul funerar moldovenesc',
    ritualDescription: 'Ritualul funerar moldovenesc este o tradiție adânc înrădăcinată în cultura locală, care combină elemente religioase, familiale și sociale. Aceste ritualuri sunt momente de comemorare, împărtășire și sprijin pentru familia îndoliată.',
    foodRole: 'În timpul acestor evenimente, mâncarea joacă un rol fundamental ca simbol al împărtășirii și sprijinului. Mâncărurile tradiționale includ:',
    traditionalDishes: {
      coliva: 'Colivă (grâu fiert cu nuci, miere și fructe uscate)',
      paine: 'Pâine (pâine tradițională)',
      mamaliga: 'Mămăligă cu brânză și smântână',
      pirozhki: 'Pirozhki (aluat umplut)',
      dulciuri: 'Dulciuri tradiționale precum cozonac și plăcinte'
    },
    cateringDescription: 'Serviciul nostru de catering pentru evenimente comemorative respectă aceste tradiții, oferind meniuri autentice care onorează memoria celor decedați și sprijină familiile în aceste momente dificile.',
    servicesTitle: 'Servicii oferite',
    services: {
      menu: 'Meniuri personalizate pentru evenimente comemorative',
      delivery: 'Livrare punctuală la domiciliu',
      setup: 'Serviciu de amenajare și prezentare',
      options: 'Opțiuni pentru diferite dimensiuni de evenimente'
    }
  },
  ru: {
    title: 'Поминальные обеды с доставкой на дом',
    description: 'Мы предлагаем полный комплекс услуг по кейтерингу для поминальных мероприятий с доставкой на дом по всему Кишиневу.',
    emotionalQuote: 'Вспомним наших близких теплом традиционных вкусов, почтим их память через пищу, которая питала наши души.',
    boxClassicCarne: 'Классический мясной бокс',
    boxClassicPost: 'Классический постный бокс',
    menuItems: {
      sarmale: 'Голубцы с мясом 200г',
      sarmaleDePost: 'Постные голубцы 200г',
      salataOlivie: 'Салат Оливье 130г',
      placinta: 'Плацинда ассорти 70г',
      batutaPui: 'Куриный паштет 50г',
      parjoala: 'Домашняя котлета 60г',
      pesteCopt: 'Запеченная рыба 50г',
      parjoalaPost: 'Постная котлета 60г',
      legume: 'Помидоры + перец 40г'
    },
    ritualTitle: 'Молдавский похоронный обряд',
    ritualDescription: 'Молдавский похоронный обряд - это глубоко укоренившаяся в местной культуре традиция, сочетающая религиозные, семейные и социальные элементы. Эти ритуалы являются моментами поминовения, общения и поддержки для скорбящей семьи.',
    foodRole: 'Во время этих событий еда играет фундаментальную роль как символ общения и поддержки. Традиционные блюда включают:',
    traditionalDishes: {
      coliva: 'Колива (вареная пшеница с орехами, медом и сухофруктами)',
      paine: 'Хлеб (традиционный)',
      mamaliga: 'Мамалыга с сыром и сметаной',
      pirozhki: 'Пирожки',
      dulciuri: 'Традиционные сладости, такие как кулич и плацинды'
    },
    cateringDescription: 'Наш кейтеринг для поминальных мероприятий соблюдает эти традиции, предлагая аутентичные меню, которые чтят память усопших и поддерживают семьи в эти трудные моменты.',
    servicesTitle: 'Предлагаемые услуги',
    services: {
      menu: 'Персонализированные меню для поминальных мероприятий',
      delivery: 'Пунктуальная доставка на дом',
      setup: 'Услуги по оформлению и презентации',
      options: 'Варианты для мероприятий разного масштаба'
    }
  },
  it: {
    title: 'Cene commemorative con consegna a domicilio',
    description: 'Offriamo servizi completi di catering per eventi commemorativi, con consegna a domicilio in tutta Chișinău.',
    emotionalQuote: 'Ricordiamo i nostri cari con il calore dei sapori tradizionali, onorando la loro memoria attraverso il cibo che ha nutrito le nostre anime.',
    boxClassicCarne: 'Box Classico Carne',
    boxClassicPost: 'Box Classico di Magro',
    menuItems: {
      sarmale: 'Involtini di carne 200g',
      sarmaleDePost: 'Involtini di verdure 200g',
      salataOlivie: 'Insalata Olivier 130g',
      placinta: 'Focaccia assortita 70g',
      batutaPui: 'Paté di pollo 50g',
      parjoala: 'Polpetta della casa 60g',
      pesteCopt: 'Pesce al forno 50g',
      parjoalaPost: 'Polpetta vegetale 60g',
      legume: 'Pomodori + peperoni 40g'
    },
    ritualTitle: 'Il rito funebre moldavo',
    ritualDescription: 'Il rito funebre moldavo è una tradizione profondamente radicata nella cultura locale, che combina elementi religiosi, familiari e sociali. Questi rituali sono momenti di commemorazione, condivisione e supporto per la famiglia in lutto.',
    foodRole: 'Durante questi eventi, il cibo svolge un ruolo fondamentale come simbolo di condivisione e sostegno. I piatti tradizionali includono:',
    traditionalDishes: {
      coliva: 'Colivă (grano bollito con noci, miele e frutta secca)',
      paine: 'Pâine (pane tradizionale)',
      mamaliga: 'Mămăligă (polenta) con formaggio e panna acida',
      pirozhki: 'Pirozhki (pasta ripiena)',
      dulciuri: 'Dolci tradizionali come cozonac e plăcinte'
    },
    cateringDescription: 'Il nostro servizio di catering per eventi commemorativi rispetta queste tradizioni, offrendo menu autentici che onorano la memoria dei defunti e sostengono le famiglie durante questi momenti difficili.',
    servicesTitle: 'Servizi offerti',
    services: {
      menu: 'Menu personalizzati per eventi commemorativi',
      delivery: 'Consegna puntuale a domicilio',
      setup: 'Servizio di allestimento e presentazione',
      options: 'Opzioni per diverse dimensioni di eventi'
    }
  }
};

export default function PomanaPage() {
  const { locale } = useLanguage();
  const t = translations[locale as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Immagine di benvenuto */}
        <div className="mb-12 rounded-xl overflow-hidden shadow-2xl">
          <div className="relative h-64 w-full">
            <Image
              src="/foto/1.jpeg"
              alt="Benvenuto"
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="transition-transform duration-500 hover:scale-105"
              priority
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 to-transparent flex items-end">
              <div className="p-8">
                <h1 className="text-4xl font-bold text-white mb-4">{t.title}</h1>
                <p className="text-xl text-gray-200 max-w-3xl">{t.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Frase emozionale */}
        <div className="text-center mb-8">
          <p className="text-2xl font-light text-gray-300 italic max-w-3xl mx-auto">
            "{t.emotionalQuote}"
          </p>
        </div>

        {/* Esempi di menu */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Menu Example 1 */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800">
            <div className="relative h-48">
              <Image
                src="/foto/cas1.jpg"
                alt="Menu Tradizionale"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 hover:scale-105"
                quality={100}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{t.boxClassicCarne}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.sarmale}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.salataOlivie}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.placinta}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.batutaPui}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.parjoala}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.legume}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu Example 2 */}
          <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800">
            <div className="relative h-48">
              <Image
                src="/foto/cas2.jpg"
                alt="Menu Completo"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="transition-transform duration-300 hover:scale-105"
                quality={100}
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">{t.boxClassicPost}</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.sarmaleDePost}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.salataOlivie}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.placinta}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.pesteCopt}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.parjoalaPost}</span>
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></span>
                  <span>{t.menuItems.legume}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gray-900 rounded-full border border-gray-800 flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="mb-12 bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800 relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
          
          <h2 className="text-3xl font-semibold text-white text-center mb-6 relative">
            <span className="relative z-10">{t.ritualTitle}</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-700"></div>
          </h2>
          
          <div className="prose prose-lg max-w-none text-gray-300 prose-headings:text-white prose-strong:text-white text-center">
            <p className="mb-4">
              {t.ritualDescription}
            </p>
            <p className="mb-4">
              {t.foodRole}
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2 max-w-2xl mx-auto">
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                <span>{t.traditionalDishes.coliva}</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                <span>{t.traditionalDishes.paine}</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                <span>{t.traditionalDishes.mamaliga}</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                <span>{t.traditionalDishes.pirozhki}</span>
              </li>
              <li className="flex items-center">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-2"></span>
                <span>{t.traditionalDishes.dulciuri}</span>
              </li>
            </ul>
            <p>
              {t.cateringDescription}
            </p>
          </div>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-lg p-8 border border-gray-800 relative overflow-hidden max-w-4xl mx-auto">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800"></div>
          
          <h2 className="text-2xl font-semibold text-white mb-6 relative text-center">
            <span className="relative z-10">{t.servicesTitle}</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gray-700"></div>
          </h2>
          
          <ul className="space-y-4 text-gray-300 max-w-2xl mx-auto">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t.services.menu}</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t.services.delivery}</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t.services.setup}</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-yellow-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t.services.options}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 