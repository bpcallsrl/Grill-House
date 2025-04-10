'use client';

export const setupMessageHandler = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('message', (event) => {
      // Verifica che il messaggio sia valido
      if (!event.data || typeof event.data !== 'object') {
        return;
      }

      // Gestisci il messaggio in modo asincrono
      const handleMessage = async () => {
        try {
          // Qui puoi aggiungere la logica specifica per gestire i messaggi
          return true; // Indica che il messaggio è stato gestito
        } catch (error) {
          console.error('Errore nella gestione del messaggio:', error);
          return false;
        }
      };

      // Esegui la gestione del messaggio
      handleMessage().catch(console.error);
    });
  }
}; 