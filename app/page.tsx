import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cookies } from 'next/headers';
import DetailsButton from './components/DetailsButton';

// Definizione dei servizi con immagini di esempio
const services = [
  {
    id: 'office',
    title: {
      ro: 'Caserole Business Lunch oficii',
      ru: 'Кейтеринг для офиса',
      it: 'Catering per ufficio'
    },
    description: {
      ro: 'Servicii de catering pentru birouri și companii, cu opțiuni flexibile pentru diferite dimensiuni ale echipei.',
      ru: 'Услуги кейтеринга для офисов и компаний с гибкими вариантами для разных размеров команды.',
      it: 'Servizi di catering per uffici e aziende, con opzioni flessibili per diverse dimensioni del team.'
    },
    image: '/office-catering.jpeg',
    link: '/services/office'
  },
  {
    id: 'pomana',
    title: {
      ro: 'Caserole pentru Pomenire',
      ru: 'Поминальные обеды',
      it: 'Cene commemorative'
    },
    description: {
      ro: 'Servicii complete de catering pentru evenimente commemorative, cu livrare la domiciliu.',
      ru: 'Полный комплекс услуг по кейтерингу для поминальных мероприятий с доставкой на дом.',
      it: 'Servizi completi di catering per eventi commemorativi, con consegna a domicilio.'
    },
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=800&q=80',
    link: '/services/pomana'
  }
];

// Traduzioni per i testi statici
const translations = {
  ro: {
    hero: {
      title: 'Grill House Catering',
      subtitle: 'Servicii de catering profesionale pentru orice ocazie',
      cta: 'Vezi serviciile noastre'
    },
    services: {
      title: 'Serviciile noastre',
      subtitle: 'Oferim o gamă largă de servicii de catering pentru a satisface toate nevoile',
      details: 'Detalii'
    },
    whyUs: {
      title: 'De ce să ne alegeți',
      subtitle: 'Experiență, calitate și profesionalism al nostru serviciu',
      items: [
        {
          title: 'Experiență',
          description: 'Peste 10 ani de experiență în domeniul cateringului'
        },
        {
          title: 'Calitate',
          description: 'Ingrediente proaspete și de cea mai înaltă calitate'
        },
        {
          title: 'Profesionalism',
          description: 'Echipă profesionistă și servicii personalizate'
        }
      ]
    },
    curiosities: {
      title: 'Curiozități',
      subtitle: 'Aflați mai multe despre tradițiile culinare moldovenești',
      items: [
        {
          title: 'Tradiții culinare',
          description: 'Bucătăria moldovenească este una dintre cele mai vechi și diverse din Europa'
        },
        {
          title: 'Ingrediente locale',
          description: 'Folosim ingrediente locale și de sezon pentru a păstra autenticitatea'
        }
      ]
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
    quote: {
      text: "Mâncarea este mai mult decât o simplă hrană, este o experiență care hrănește sufletul și creează momente de neuitat. Alegerea unei alimentații sănătoase înseamnă să investești în bunăstarea și fericirea ta, și îți crește concentrarea îmbunătățind performanța la locul de muncă."
    }
  },
  ru: {
    hero: {
      title: 'Гриль Хаус Кейтеринг',
      subtitle: 'Профессиональные услуги кейтеринга для любого случая',
      cta: 'Посмотреть наши услуги'
    },
    services: {
      title: 'Наши услуги',
      subtitle: 'Мы предлагаем широкий спектр услуг кейтеринга для удовлетворения всех потребностей',
      details: 'Подробнее'
    },
    whyUs: {
      title: 'Почему выбирают нас',
      subtitle: 'Опыт, качество и профессионализм нашего сервиса',
      items: [
        {
          title: 'Опыт',
          description: 'Более 10 лет опыта в сфере кейтеринга'
        },
        {
          title: 'Качество',
          description: 'Свежие ингредиенты высшего качества'
        },
        {
          title: 'Профессионализм',
          description: 'Профессиональная команда и индивидуальный подход'
        }
      ]
    },
    curiosities: {
      title: 'Интересные факты',
      subtitle: 'Узнайте больше о молдавских кулинарных традициях',
      items: [
        {
          title: 'Кулинарные традиции',
          description: 'Молдавская кухня является одной из самых древних и разнообразных в Европе'
        },
        {
          title: 'Местные ингредиенты',
          description: 'Мы используем местные и сезонные ингредиенты для сохранения аутентичности'
        }
      ]
    },
    coffee: {
      title: 'Кофейный Сервис для Офисов',
      subtitle: 'Предлагаем полный кофейный сервис для вашего офиса',
      mainTitle: 'Бесплатное Предоставление Кофемашины',
      features: [
        'Кофемашина Lavazza бесплатно для вашего офиса',
        'Капсулы натурального кофе Lavazza по цене всего 10 MDL',
        'Техническое обслуживание и поддержка включены'
      ],
      contact: 'Напишите нам в WhatsApp на номер +37378536074'
    },
    quote: {
      text: "Еда - это больше, чем просто питание, это опыт, который питает душу и создает незабываемые моменты. Выбор здорового питания означает инвестиции в ваше благополучие и счастье, повышает концентрацию и улучшает производительность на работе."
    }
  },
  it: {
    hero: {
      title: 'Grill House Catering',
      subtitle: 'Servizi di catering professionali per ogni occasione',
      cta: 'Scopri i nostri servizi'
    },
    services: {
      title: 'I nostri servizi',
      subtitle: 'Offriamo una vasta gamma di servizi di catering per soddisfare tutte le esigenze',
      details: 'Dettagli'
    },
    whyUs: {
      title: 'Perché scegliere noi',
      subtitle: 'Esperienza, qualità e professionalità del nostro servizio',
      items: [
        {
          title: 'Esperienza',
          description: 'Oltre 10 anni di esperienza nel settore del catering'
        },
        {
          title: 'Qualità',
          description: 'Ingredienti freschi e di alta qualità'
        },
        {
          title: 'Professionalità',
          description: 'Team professionale e servizi personalizzati'
        }
      ]
    },
    curiosities: {
      title: 'Curiosità',
      subtitle: 'Scopri di più sulle tradizioni culinarie moldave',
      items: [
        {
          title: 'Tradizioni culinarie',
          description: 'La cucina moldava è una delle più antiche e diversificate d\'Europa'
        },
        {
          title: 'Ingredienti locali',
          description: 'Utilizziamo ingredienti locali e di stagione per preservare l\'autenticità'
        }
      ]
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
      contact: 'Scrivici per WhatsApp al numero +37378536074'
    },
    quote: {
      text: "Il cibo è più di un semplice nutrimento, è un'esperienza che nutre l'anima e crea momenti indimenticabili. Scegliere un'alimentazione sana significa investire nel tuo benessere e nella tua felicità, ed aumenta la concentrazione migliora il rendimento sul lavoro."
    }
  }
};

export default function Home() {
  const cookieStore = cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';
  const t = translations[locale as keyof typeof translations];

  console.log('Home component rendered', { locale, services });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1920&q=80"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover' }}
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">{t.hero.title}</h1>
          <p className="text-xl md:text-2xl mb-8">{t.hero.subtitle}</p>
          <Link 
            href="#services" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors"
          >
            {t.hero.cta}
          </Link>
        </div>
      </section>

      {/* Frase emozionale sull'alimentazione sana */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border-4 border-blue-300 relative overflow-hidden animate-pulse-once">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-200/20 to-purple-200/20 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full -ml-16 -mb-16"></div>
            
            <div className="relative z-10 text-center">
              <p className="text-2xl md:text-3xl font-medium text-gray-800 italic leading-relaxed animate-rotate-text animate-continuous-pulse">
                {t.quote.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title[locale as keyof typeof service.title]}
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="transition-transform duration-500"
                  />
                </div>
                <div className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-bl-full -mt-8 -mr-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-3 relative z-10">
                    {service.title[locale as keyof typeof service.title]}
                  </h3>
                  <p className="text-blue-100 mb-6 relative z-10">
                    {service.description[locale as keyof typeof service.description]}
                  </p>
                  <div className="flex justify-end relative z-10">
                    <a 
                      href={service.link}
                      className="bg-white text-blue-600 font-medium py-2.5 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm hover:bg-blue-50 shadow-md"
                    >
                      {t.services.details}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coffee Service Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-4">
              {t.coffee.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.coffee.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105">
              <Image
                src="/foto/lavazza.jpeg"
                alt="Macchina del caffè Lavazza"
                fill
                style={{ objectFit: 'cover' }}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-xl border-l-4 border-t-4 border-amber-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-100 to-transparent rounded-bl-full -mt-8 -mr-8"></div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-6 relative z-10">
                {t.coffee.mainTitle}
              </h3>
              
              <div className="space-y-4 mb-8 relative z-10">
                {t.coffee.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              <a 
                href="https://wa.me/37378536074"
                className="inline-flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                {t.coffee.contact}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-4">{t.whyUs.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.whyUs.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.whyUs.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-l-4 border-blue-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                    {index === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curiosities Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-4">{t.curiosities.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.curiosities.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.curiosities.items.map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-l-4 border-amber-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-100 to-orange-100 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-tl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                    {index === 0 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 