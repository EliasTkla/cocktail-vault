/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        domains: ['apipics.s3.amazonaws.com'],
    },
    experimental: {
        serverActions: true,
    },
    experimental: {
        typedRoutes: true
    }
}

module.exports = nextConfig
