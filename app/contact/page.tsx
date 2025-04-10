'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const translations = {
  ro: {
    title: 'Contactați-ne',
    address: 'Adresa',
    phone: 'Telefon',
    form: {
      title: 'Trimite Date pentru WhatsApp',
      subtitle: 'Vă Sunăm Imediat',
      company: 'Companie',
      name: 'Nume și Prenume',
      phone: 'Telefon',
      message: 'Mesaj',
      send: 'Trimite'
    },
    success: 'Mesajul a fost trimis cu succes!',
    error: 'A apărut o eroare. Vă rugăm să încercați din nou.'
  },
  ru: {
    title: 'Свяжитесь с нами',
    address: 'Адрес',
    phone: 'Телефон',
    form: {
      title: 'Отправить данные в WhatsApp',
      subtitle: 'Мы перезвоним вам сразу',
      company: 'Компания',
      name: 'Имя и Фамилия',
      phone: 'Телефон',
      message: 'Сообщение',
      send: 'Отправить'
    },
    success: 'Сообщение успешно отправлено!',
    error: 'Произошла ошибка. Пожалуйста, попробуйте снова.'
  },
  it: {
    title: 'Contattaci',
    address: 'Indirizzo',
    phone: 'Telefono',
    form: {
      title: 'Invia Dati per WhatsApp',
      subtitle: 'Ti Richiamiamo Subito',
      company: 'Azienda',
      name: 'Nome e Cognome',
      phone: 'Telefono',
      message: 'Messaggio',
      send: 'Invia'
    },
    success: 'Messaggio inviato con successo!',
    error: 'Si è verificato un errore. Riprova.'
  }
};

export default function Contact() {
  const { locale } = useLanguage();
  const t = translations[locale as keyof typeof translations];
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Nuova richiesta di informazioni:%0A%0AAzienda: ${formData.company}%0ANome: ${formData.name}%0ATelefono: ${formData.phone}%0AMessaggio: ${formData.message}`;
    const whatsappUrl = `https://wa.me/37378536074?text=${message}`;
    window.open(whatsappUrl, '_blank');
    setStatus('success');
    setFormData({ company: '', name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t.title}</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mappa e Informazioni */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.address}</h2>
              <p className="text-gray-600">Strada Alexandru Cel Bun 7, Chișinău</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t.phone}</h2>
              <p className="text-gray-600">+373 78536074 - Referente Ordini Maria</p>
            </div>

            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.904933366374!2d28.7733!3d47.0105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c3628b769a1%3A0x37d1d6305749dd3c!2sStrada%20Alexandru%20cel%20Bun%207%2C%20Chi%C8%99in%C4%83u!5e0!3m2!1sit!2sit!4v1647887654321!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Form di Contatto */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-2">{t.form.title}</h2>
              <p className="text-xl text-gray-600">{t.form.subtitle}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  {t.form.company}
                </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t.form.name}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t.form.send}
                </button>
              </div>

              {status === 'success' && (
                <div className="text-green-600 text-center">{t.success}</div>
              )}
              {status === 'error' && (
                <div className="text-red-600 text-center">{t.error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 