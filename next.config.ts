/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment', // Direkomendasikan untuk keamanan tambahan
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Direkomendasikan
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;