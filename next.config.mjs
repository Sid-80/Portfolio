/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            pathname: '/images/**',
          },
        ],
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
    },
};

export default nextConfig;
