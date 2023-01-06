/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['res.cloudinary.com',
    'localhost',
    'sea-turtle-app-hewtp.ondigitalocean.app']
  },
}

module.exports = nextConfig
