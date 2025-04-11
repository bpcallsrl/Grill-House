import React from 'react';
import { cookies } from 'next/headers';
import Image from 'next/image';
import SEO from '../../components/SEO';

const translations = {
  ro: {
    title: 'Catering pentru birou',
    description: 'Servicii complete de catering pentru companii și birouri',
    weeklyMenu: 'Meniul săptămânii',
    days: {
      monday: 'Luni',
      tuesday: 'Marți',
      wednesday: 'Miercuri',
      thursday: 'Joi',
      friday: 'Vineri'
    },
    menu: {
      monday: [
        'Supă de tăiței (300Gr)',
        'Parjoala (Vita / Porc) (100Gr)',
        'Hrisca cu legume (200Gr)',
        'Salată de varză cu morcov (100Gr)',
        'Paine (2 Felii)'
      ],
      tuesday: [
        'Bors Rosu (300Gr)',
        'Battuta de pui (100Gr)',
        'Piure de cartofi (200Gr)',
        'Salată (100Gr)',
        'Paine (2 Felii)'
      ],
      wednesday: [
        'Supa "Toscana" cu Fasole (300Gr)',
        'Chiftelute porc/vita (100Gr)',
        'Bulgur cu legume (200Gr)',
        'Salată (100Gr)',
        'Paine (2 Felii)'
      ],
      thursday: [
        'Supă de Legume (300Gr)',
        'Tocanita de pui/Legume (100Gr)',
        'Pilaf de Orez cu legume (200Gr)',
        'Salată (100Gr)',
        'Paine (2 Felii)'
      ],
      friday: [
        'Supă de Mazare (300Gr)',
        'Cartofi cu Verdeata (200Gr)',
        'Parjoala de pui (100Gr)',
        'Salată (100Gr)',
        'Paine (2 Felii)'
      ]
    },
    notes: 'Note importante:',
    notesList: [
      'Comenzile se primesc cu o zi înainte',
      'Livrare gratuită pentru comenzi de minim 10 porții',
      'Meniul poate fi personalizat conform cerințelor'
    ],
    contact: {
      title: 'Pentru comenzi și informații:',
      role: 'Responsabil Relații cu Publicul Maria',
      whatsapp: 'Scrie pe WhatsApp'
    },
    phone: 'Tel: ',
    email: 'Email: ',
    menuExamples: {
      title: 'Exemple din Meniurile Noastre',
      menu1: {
        title: 'Meniu Business Light',
        items: [
          'Supa zilei',
          'Salată proaspătă',
          'Pâine de casă',
          'Cartofi prăjiți'
        ]
      },
      menu2: {
        title: 'Meniu Business Classic',
        items: [
          'Supa zilei',
          'Pui pane',
          'Garnitură de legume',
          'Pâine'
        ]
      },
      menu3: {
        title: 'Meniu Business Premium',
        items: [
          'Supa zilei',
          'Friptură de porc',
          'Legume la grătar',
          'Pâine, salată'
        ]
      }
    },
    wellness: {
      title: 'Curiozități și Bunăstare',
      motivational: {
        title: 'Fraze motivaționale',
        quotes: [
          'Mănâncă sănătos, inimă sănătoasă, viață sănătoasă...',
          'Mâncarea este energie, alege-o pe cea potrivită pentru corpul tău',
          'O masă echilibrată este primul pas spre o zi productivă'
        ]
      },
      facts: {
        title: 'Curiozități alimentare',
        items: [
          'Mesele regulate îmbunătățesc concentrarea și productivitatea cu până la 20%',
          'Proteinele vegetale reduc riscul de boli cardiace cu 27%',
          'Culorile vii din farfurie cresc pofta de mâncare și satisfacția cu 15%'
        ]
      }
    },
    coffee: {
      title: 'Serviciu de Cafea pentru Birouri',
      subtitle: 'Oferim un serviciu complet de cafea pentru biroul tău',
      mainTitle: 'Comodat Gratuit pentru Aparatul de Cafea',
      features: [
        'Aparat de cafea Lavazza în comodat gratuit pentru biroul tău',
        'Capsule de cafea naturală Lavazza la prețul de doar 10 MDL',
        'Întreținere și asistență tehnică inclusă'
      ],
      contact: 'Scrie-ne pe WhatsApp la numărul +37378536074'
    },
    promotionButton: 'Descoperă posibilitatea promoțiilor pentru biroul tău'
  },
  ru: {
    title: 'Кейтеринг для офиса',
    description: 'Полный комплекс услуг кейтеринга для компаний и офисов',
    weeklyMenu: 'Меню недели',
    days: {
      monday: 'Понедельник',
      tuesday: 'Вторник',
      wednesday: 'Среда',
      thursday: 'Четверг',
      friday: 'Пятница'
    },
    menu: {
      monday: [
        'Суп с лапшой (300Гр)',
        'Котлета (Говядина / Свинина) (100Гр)',
        'Гречка с овощами (200Гр)',
        'Салат из капусты с морковью (100Гр)',
        'Хлеб (2 кусочка)'
      ],
      tuesday: [
        'Красный борщ (300Гр)',
        'Куриная отбивная (100Гр)',
        'Картофельное пюре (200Гр)',
        'Салат (100Гр)',
        'Хлеб (2 кусочка)'
      ],
      wednesday: [
        'Суп "Тоскана" с фасолью (300Гр)',
        'Котлеты свинина/говядина (100Гр)',
        'Булгур с овощами (200Гр)',
        'Салат (100Гр)',
        'Хлеб (2 кусочка)'
      ],
      thursday: [
        'Овощной суп (300Гр)',
        'Тушеная курица с овощами (100Гр)',
        'Рисовый плов с овощами (200Гр)',
        'Салат (100Гр)',
        'Хлеб (2 кусочка)'
      ],
      friday: [
        'Гороховый суп (300Гр)',
        'Картофель с зеленью (200Гр)',
        'Куриная котлета (100Гр)',
        'Салат (100Гr)',
        'Хлеб (2 кусочка)'
      ]
    },
    notes: 'Важные примечания:',
    notesList: [
      'Заказы принимаются за день',
      'Бесплатная доставка при заказе от 10 порций',
      'Меню может быть изменено согласно требованиям'
    ],
    contact: {
      title: 'Для заказов и информации:',
      role: 'Менеджер по работе с клиентами Мария',
      whatsapp: 'Написать в WhatsApp'
    },
    phone: 'Тел: ',
    email: 'Email: ',
    menuExamples: {
      title: 'Примеры Наших Меню',
      menu1: {
        title: 'Меню Business Light',
        items: [
          'Суп дня',
          'Свежий салат',
          'Домашний хлеб',
          'Картофель фри'
        ]
      },
      menu2: {
        title: 'Меню Business Classic',
        items: [
          'Суп дня',
          'Курица в панировке',
          'Овощной гарнир',
          'Хлеб'
        ]
      },
      menu3: {
        title: 'Меню Business Premium',
        items: [
          'Суп дня',
          'Свиная отбивная',
          'Овощи гриль',
          'Хлеб, салат'
        ]
      }
    },
    wellness: {
      title: 'Интересные факты и благополучие',
      motivational: {
        title: 'Мотивационные фразы',
        quotes: [
          'Здоровое питание, здоровое сердце, здоровая жизнь...',
          'Еда - это энергия, выбирай правильную для своего тела',
          'Сбалансированный прием пищи - первый шаг к продуктивному дню'
        ]
      },
      facts: {
        title: 'Факты о питании',
        items: [
          'Регулярное питание улучшает концентрацию и производительность до 20%',
          'Растительные белки снижают риск сердечных заболеваний на 27%',
          'Яркие цвета в блюдах повышают аппетит и удовлетворение на 15%'
        ]
      }
    },
    coffee: {
      title: 'Кофейный Сервис для Офисов',
      subtitle: 'Предлагаем полный комплекс кофейных услуг для вашего офиса',
      mainTitle: 'Бесплатный Коммодат Кофемашины',
      features: [
        'Кофемашина Lavazza в бесплатный коммодат для вашего офиса',
        'Капсулы натурального кофе Lavazza по цене всего 10 MDL',
        'Техническое обслуживание и поддержка включены'
      ],
      contact: 'Напишите нам в WhatsApp на номер +37378536074'
    },
    promotionButton: 'Узнайте о возможных акциях для вашего офиса'
  },
  it: {
    title: 'Catering per ufficio',
    description: 'Servizi completi di catering per aziende e uffici',
    weeklyMenu: 'Menu della settimana',
    days: {
      monday: 'Lunedì',
      tuesday: 'Martedì',
      wednesday: 'Mercoledì',
      thursday: 'Giovedì',
      friday: 'Venerdì'
    },
    menu: {
      monday: [
        'Zuppa con pasta (300Gr)',
        'Polpetta (Manzo / Maiale) (100Gr)',
        'Grano saraceno con verdure (200Gr)',
        'Insalata di cavolo e carote (100Gr)',
        'Pane (2 fette)'
      ],
      tuesday: [
        'Borsch Rosso (300Gr)',
        'Cotoletta di pollo (100Gr)',
        'Purè di patate (200Gr)',
        'Insalata (100Gr)',
        'Pane (2 fette)'
      ],
      wednesday: [
        'Zuppa "Toscana" con fagioli (300Gr)',
        'Polpette maiale/manzo (100Gr)',
        'Bulgur con verdure (200Gr)',
        'Insalata (100Gr)',
        'Pane (2 fette)'
      ],
      thursday: [
        'Zuppa di verdure (300Gr)',
        'Spezzatino di pollo/verdure (100Gr)',
        'Riso pilaf con verdure (200Gr)',
        'Insalata (100Gr)',
        'Pane (2 fette)'
      ],
      friday: [
        'Zuppa di piselli (300Gr)',
        'Patate alle erbe (200Gr)',
        'Polpetta di pollo (100Gr)',
        'Insalata (100Gr)',
        'Pane (2 fette)'
      ]
    },
    notes: 'Note importanti:',
    notesList: [
      'Gli ordini devono essere effettuati il giorno prima',
      'Consegna gratuita per ordini di minimo 10 porzioni',
      'Il menu può essere personalizzato secondo le esigenze'
    ],
    contact: {
      title: 'Per ordini e informazioni:',
      role: 'Responsabile Relazioni con il pubblico Maria',
      whatsapp: 'Chatta su WhatsApp'
    },
    phone: 'Tel: ',
    email: 'Email: ',
    menuExamples: {
      title: 'Esempi dei Nostri Menu',
      menu1: {
        title: 'Menu Business Light',
        items: [
          'Zuppa del giorno',
          'Insalata fresca',
          'Pane fatto in casa',
          'Patate fritte'
        ]
      },
      menu2: {
        title: 'Menu Business Classic',
        items: [
          'Zuppa del giorno',
          'Pollo impanato',
          'Contorno di verdure',
          'Pane'
        ]
      },
      menu3: {
        title: 'Menu Business Premium',
        items: [
          'Zuppa del giorno',
          'Bistecca di maiale',
          'Verdure grigliate',
          'Pane, insalata'
        ]
      }
    },
    wellness: {
      title: 'Curiosità e Benessere',
      motivational: {
        title: 'Frasi motivazionali',
        quotes: [
          'Mangiare sano, cuore sano, vita sana...',
          'Il cibo è energia, scegli quella giusta per il tuo corpo',
          'Un pasto equilibrato è il primo passo verso una giornata produttiva'
        ]
      },
      facts: {
        title: 'Curiosità alimentari',
        items: [
          'I pasti regolari migliorano la concentrazione e la produttività fino al 20%',
          'Le proteine vegetali riducono il rischio di malattie cardiache del 27%',
          'I colori vivaci nei piatti aumentano l\'appetito e la soddisfazione del 15%'
        ]
      }
    },
    coffee: {
      title: 'Servizio Caffè per Uffici',
      subtitle: 'Offriamo un servizio completo di caffè per il tuo ufficio',
      mainTitle: 'Comodato Gratuito della Macchina del Caffè',
      features: [
        'Macchina del caffè Lavazza in comodato gratuito per il tuo ufficio',
        'Capsule per caffè naturale Lavazza al costo di soli 10 MDL',
        'Manutenzione e assistenza tecnica inclusa'
      ],
      contact: 'Scrivici su WhatsApp al numero +37378536074'
    },
    promotionButton: 'Scopri la possibilità di promozioni per il tuo ufficio'
  }
};

const sampleMenus = [
  {
    id: 'menu1',
    image: '/foto/zeama-de-pui.jpg.jpeg',
    alt: 'Zuppa di pollo tradizionale'
  },
  {
    id: 'menu2',
    image: '/foto/verd-gril.jpg.jpeg',
    alt: 'Verdure alla griglia'
  },
  {
    id: 'menu3',
    image: '/foto/salata-se-vearza.jpg.jpeg',
    alt: 'Insalata di cavolo fresco'
  }
];

export default function OfficePage() {
  const cookieStore = cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';
  const t = translations[locale as keyof typeof translations];

  return (
    <>
      <SEO 
        title="Caseruole per Ufficio a Chișinău | Servizio Catering Aziendale"
        description="Servizio di caseruole e pranzi per uffici a Chișinău. Consegna giornaliera di caseruole calde e fresche per aziende. Menu variegato, prezzi competitivi e servizio professionale nella zona di Chișinău."
        keywords="caseruole, pranzo ufficio, catering aziendale, caseruole per ufficio, pranzo al lavoro, mensa aziendale, Chișinău, Moldova, consegna pranzo ufficio"
        city="Chișinău"
      />
      
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
            <p className="text-xl text-gray-600">{t.description}</p>
          </div>

          {/* Coffee Service Section */}
          <div className="max-w-5xl mx-auto mb-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="relative h-64 w-full rounded-xl overflow-hidden">
                <Image
                  src="/foto/lavazza.jpeg"
                  alt="Macchina del caffè Lavazza"
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-xl"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.coffee.mainTitle}
                </h2>
                
                <div className="space-y-3 mb-6">
                  {t.coffee.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-gray-700">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                
                <a
                  href="https://wa.me/37378536074"
                  className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm shadow-md"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {t.coffee.contact}
                </a>
              </div>
            </div>
          </div>

          {/* Promotion Button */}
          <div className="max-w-5xl mx-auto mb-16">
            <a
              href="/services/office/promotions"
              className="block w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-center font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
            >
              {t.promotionButton}
            </a>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t.menuExamples.title}</h2>

          {/* Menu Examples Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Menu Example 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/foto/zeama-de-pui.jpg.jpeg"
                  alt={t.menuExamples.menu1.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.menuExamples.menu1.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.menuExamples.menu1.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Example 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/foto/verd-gril.jpg.jpeg"
                  alt={t.menuExamples.menu2.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.menuExamples.menu2.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.menuExamples.menu2.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Menu Example 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/foto/salata-se-vearza.jpg.jpeg"
                  alt={t.menuExamples.menu3.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{t.menuExamples.menu3.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {t.menuExamples.menu3.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
            <div className="bg-gray-100 p-4 border-b border-gray-200">
              <h2 className="text-3xl font-semibold text-gray-900 text-center">
                {t.weeklyMenu}
              </h2>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Monday */}
                <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-blue-500 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.days.monday}</h3>
                  <ul className="space-y-2">
                    {t.menu.monday.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Tuesday */}
                <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-green-500 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.days.tuesday}</h3>
                  <ul className="space-y-2">
                    {t.menu.tuesday.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Wednesday */}
                <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-yellow-500 shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.days.wednesday}</h3>
                  <ul className="space-y-2">
                    {t.menu.wednesday.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Thursday */}
                <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-purple-500 shadow-md">
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/foto/verd-gril.jpg.jpeg"
                      alt="Verdure grigliate"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.days.thursday}</h3>
                  <ul className="space-y-2">
                    {t.menu.thursday.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>

                {/* Friday */}
                <div className="bg-gray-50 rounded-lg p-6 border-t-4 border-red-500 shadow-md">
                  <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                    <Image
                      src="/foto/patate lesse.jpeg"
                      alt="Patate lesse"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.days.friday}</h3>
                  <ul className="space-y-2">
                    {t.menu.friday.map((item, index) => (
                      <li key={index} className="text-gray-700">• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Curiosità e frasi emozionali */}
          <div className="mb-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200/50 backdrop-blur-sm max-w-4xl mx-auto">
            <div className="p-8">
              <div className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-blue-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{t.wellness.title}</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-white/90 rounded-lg p-6 shadow-md border border-blue-100">
                        <h4 className="text-xl font-medium text-blue-800 mb-3">{t.wellness.motivational.title}</h4>
                        <ul className="space-y-3">
                          {t.wellness.motivational.quotes.map((quote, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-6 w-6 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <p className="text-gray-700 italic">{quote}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-white/90 rounded-lg p-6 shadow-md border border-blue-100">
                        <h4 className="text-xl font-medium text-blue-800 mb-3">{t.wellness.facts.title}</h4>
                        <ul className="space-y-3">
                          {t.wellness.facts.items.map((fact, index) => (
                            <li key={index} className="flex items-start">
                              <svg className="h-6 w-6 text-blue-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <p className="text-gray-700">{fact}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl shadow-xl overflow-hidden border-2 border-blue-200/50 backdrop-blur-sm max-w-3xl mx-auto">
            <div className="p-8">
              <div className="relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full -ml-16 -mb-16"></div>
                
                <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-blue-100">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{t.contact.title}</h3>
                  <div className="flex flex-col space-y-4 items-center">
                    <div className="flex flex-col md:flex-row items-center gap-2 text-center md:text-left">
                      <p className="text-gray-700 text-lg font-medium">{t.phone}+373 78536074</p>
                      <span className="hidden md:inline text-gray-500">-</span>
                      <p className="text-gray-700 text-lg">{t.contact.role}</p>
                    </div>
                    <a 
                      href="https://wa.me/37378536074" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-3 rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.357 17.357c-.882.883-1.922 1.523-3.07 1.91-.393.133-.803.232-1.22.3-1.184.188-2.387.167-3.56-.062-1.13-.221-2.22-.633-3.232-1.22-.99-.577-1.892-1.306-2.668-2.168-.776-.863-1.393-1.853-1.822-2.932-.435-1.1-.652-2.265-.652-3.447 0-1.182.217-2.347.652-3.447.429-1.08 1.046-2.07 1.822-2.932.776-.862 1.678-1.591 2.668-2.168 1.012-.587 2.102-.999 3.232-1.22 1.173-.229 2.376-.25 3.56-.062.417.068.827.167 1.22.3 1.148.387 2.188 1.027 3.07 1.91.882.882 1.522 1.922 1.91 3.07.133.393.232.803.3 1.22.229 1.173.25 2.376.062 3.56-.068.417-.167.827-.3 1.22-.388 1.148-1.028 2.188-1.91 3.07z"/>
                      </svg>
                      {t.contact.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 