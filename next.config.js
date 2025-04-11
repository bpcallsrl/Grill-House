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
        source: '/servizi/office',
        destination: '/services/office',
        permanent: true,
      },
      {
        source: '/chi-siamo',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contatti',
        destination: '/contact',
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