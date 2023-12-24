/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {},
    images: {
      // domains: ["www.placeholder.com",'images.unsplash.com','xizphgvhilhjoxxduinv.supabase.co'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "www.placeholder.com"
        },
        {
          protocol: 'https',
          hostname: 'images.unsplash.com'
        },
        {
          protocol: 'https',
          hostname: 'xizphgvhilhjoxxduinv.supabase.co'
        }
      ],
    },

  };

  module.exports = nextConfig;