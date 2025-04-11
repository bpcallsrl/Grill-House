/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Reindirizzamento dalla vecchia URL alla nuova
      {
        source: '/services',
        destination: '/servizi',
        permanent: true, // questo è importante per il SEO (301 redirect)
      },
      {
        source: '/about',
        destination: '/chi-siamo',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contatti',
        permanent: true,
      },
      // Reindirizzamento con parametri dinamici
      {
        source: '/menu/:id',
        destination: '/menu/dettaglio/:id',
        permanent: true,
      },
      // Reindirizzamento con query parameters
      {
        source: '/search',
        destination: '/ricerca',
        permanent: true,
      },
      // Reindirizzamento da vecchi URL dei servizi
      {
        source: '/catering',
        destination: '/services/office',
        permanent: true,
      },
      {
        source: '/commemorazioni',
        destination: '/services/pomana',
        permanent: true,
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    domains: ['localhost'],
    unoptimized: true,
  },
}

module.exports = nextConfig 