/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
          remotePatterns: [
        
              {
                protocol: 'https',
                hostname: 'https://randomuser.me',
                port: '',
                pathname: '/**',
              },
            ],
            domains: ['https://randomuser.me'],
      }
};

export default nextConfig;
