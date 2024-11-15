/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ['mongoose']
  },
  images: {
    domains: ['m.media-amazon.com','img.drz.lazcdn.com', 'camelcamelcamel.com']
  }
}

module.exports = nextConfig
