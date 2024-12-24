/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  //   serverComponentsExternalPackages: ['mongoose']
  // },
  images: {
    domains: ['m.media-amazon.com','img.drz.lazcdn.com', 'camelcamelcamel.com']
  },
  serverRuntimeConfig: {
    PORT: process.env.PORT || 3000 // Set the default port to 3000
  },
  // output: "standalone",
}

module.exports = nextConfig
