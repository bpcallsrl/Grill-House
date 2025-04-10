'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CoffeePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Mostra il pop-up dopo 3 secondi dal caricamento della pagina
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 overflow-hidden">
        {/* Pulsante di chiusura */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Chiudi"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenuto del pop-up */}
        <div className="p-6">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
              Servizio Caffè per Uffici
            </h2>
            
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image 
                src="/foto/lavazza.jpeg" 
                alt="Macchina del caffè Lavazza" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            
            <div className="text-center mb-4">
              <p className="text-lg font-medium text-gray-800 mb-2">
                Comodato gratuito della macchina del caffè
              </p>
              <p className="text-gray-600 mb-2">
                Offriamo in comodato gratuito la macchina del caffè Lavazza per il tuo ufficio
              </p>
              <p className="text-gray-600 mb-2">
                Capsule per caffè naturale Lavazza al costo di soli <span className="font-bold text-blue-600">10 MDL</span>
              </p>
            </div>
            
            <button 
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors"
            >
              Contattaci per maggiori informazioni
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
 