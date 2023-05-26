/** @type {import('next').NextConfig} */
const removeImports = require('next-remove-imports')

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = removeImports({ ...nextConfig })
