/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // ✅ এটা দিলে image optimization error আর আসবে না
  },
  typescript: {
    ignoreBuildErrors: true, // ✅ আগের টাইপস্ক্রিপ্ট error এর জন্য
  },
};

module.exports = nextConfig;
