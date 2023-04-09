/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['res.cloudinary.com',
    'localhost']
  },
  env:{
    "MONGO_URI":"mongodb+srv://aditya4sure:Perfect@imrcare.qcv6lrk.mongodb.net/?retryWrites=true&w=majority"
  }
}

module.exports = nextConfig
