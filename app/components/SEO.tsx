'use client';

import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords: string;
  city?: string;
}

export default function SEO({ title, description, keywords, city = 'Chișinău' }: SEOProps) {
  useEffect(() => {
    // Aggiorna il titolo
    document.title = `${title} | Grill House Catering ${city}`;
    
    // Aggiorna i meta tag
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', `${keywords}, ${city}, Moldova`);
    }
    
    // Aggiorna i meta tag Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', `${title} | Grill House Catering ${city}`);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Aggiorna lo schema.org markup
    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
      schemaScript.remove();
    }
    
    const newSchemaScript = document.createElement('script');
    newSchemaScript.type = 'application/ld+json';
    newSchemaScript.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Grill House Catering",
      "image": "https://my-grill-house.md/logo.png",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Il tuo indirizzo",
        "addressLocality": city,
        "addressRegion": "Chișinău",
        "postalCode": "MD-2000",
        "addressCountry": "MD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.0245,
        "longitude": 28.8321
      },
      "servesCuisine": "Moldovan",
      "priceRange": "$$",
      "areaServed": city
    });
    
    document.head.appendChild(newSchemaScript);
  }, [title, description, keywords, city]);

  return null;
} 