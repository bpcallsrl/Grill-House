import { cookies } from 'next/headers';
import Image from 'next/image';

const translations = {
  ro: {
    title: 'Despre Noi',
    subtitle: 'Din 1999, Aducem Calitate și Tradiție pe Masa Dumneavoastră',
    history: {
      title: 'Istoria Noastră',
      description: 'Înființată în 1999, compania noastră a crescut constant, devenind unul dintre cei mai de încredere furnizori de servicii de catering din Chișinău. Cu o experiență de peste două decenii, ne-am perfecționat arta preparării mâncării, păstrând tradițiile și adaptându-ne la cerințele moderne.'
    },
    presence: {
      title: 'Prezența Noastră',
      description: 'Suntem mândri să fim o parte activă a comunității din Chișinău, servind atât companii cât și persoane private. Rețeaua noastră de distribuție acoperă întregul oraș, asigurând livrări prompte și servicii de calitate.'
    },
    philosophy: {
      title: 'Filozofia Noastră',
      description: '"Viață sănătoasă, corp sănătos, minte sănătoasă" - Această mantră ghidează fiecare aspect al activității noastre. Credem că mâncarea de calitate este fundamentul unei vieți sănătoase.'
    }
  },
  ru: {
    title: 'О Нас',
    subtitle: 'С 1999 года, Приносим Качество и Традиции на Ваш Стол',
    history: {
      title: 'Наша История',
      description: 'Основанная в 1999 году, наша компания постоянно росла, став одним из самых надежных поставщиков услуг кейтеринга в Кишиневе. С более чем двадцатилетним опытом, мы усовершенствовали искусство приготовления пищи, сохраняя традиции и адаптируясь к современным требованиям.'
    },
    presence: {
      title: 'Наше Присутствие',
      description: 'Мы гордимся тем, что являемся активной частью сообщества Кишинева, обслуживая как компании, так и частных лиц. Наша сеть распространения охватывает весь город, обеспечивая своевременные доставки и качественный сервис.'
    },
    philosophy: {
      title: 'Наша Философия',
      description: '"Здоровая жизнь, здоровое тело, здоровый ум" - Эта мантра направляет каждый аспект нашей деятельности. Мы верим, что качественная еда является основой здоровой жизни.'
    }
  },
  it: {
    title: 'Chi Siamo',
    subtitle: 'Dal 1999, Portiamo Qualità e Tradizione sulla Vostra Tavola',
    history: {
      title: 'La Nostra Storia',
      description: 'Fondata nel 1999, la nostra azienda è cresciuta costantemente, diventando uno dei fornitori di servizi di catering più affidabili di Chisinau. Con oltre due decenni di esperienza, abbiamo perfezionato l\'arte della preparazione dei cibi, mantenendo le tradizioni e adattandoci alle esigenze moderne.'
    },
    presence: {
      title: 'La Nostra Presenza',
      description: 'Siamo orgogliosi di essere una parte attiva della comunità di Chisinau, servendo sia aziende che privati. La nostra rete di distribuzione copre l\'intera città, garantendo consegne puntuali e servizi di qualità.'
    },
    philosophy: {
      title: 'La Nostra Filosofia',
      description: '"Vita sana, corpo sano, mente sana" - Questo mantra guida ogni aspetto della nostra attività. Crediamo che il cibo di qualità sia il fondamento di una vita sana.'
    }
  }
};

export default function About() {
  const cookieStore = cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'ro';
  const t = translations[locale as keyof typeof translations];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-4">{t.title}</h1>
        <p className="text-xl text-center mb-12 text-gray-600">{t.subtitle}</p>

        <div className="relative h-96 w-full mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1600&q=80"
            alt="Healthy food preparation"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center px-4">
              <h2 className="text-3xl font-bold mb-4">{t.philosophy.title}</h2>
              <p className="text-xl italic">{t.philosophy.description}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{t.history.title}</h2>
            <p className="text-gray-600">{t.history.description}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{t.presence.title}</h2>
            <p className="text-gray-600">{t.presence.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
} 