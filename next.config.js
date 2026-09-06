/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const securityHeaders = [
    {key: 'X-Content-Type-Options', value: 'nosniff'},
    {key: 'X-Frame-Options', value: 'SAMEORIGIN'},
    {key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin'},
    {key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()'},
]

const nextConfig = {
    i18n,
    reactStrictMode: true,
    poweredByHeader: false,
    compress: true,
    images: {
        formats: ['image/avif', 'image/webp'],
    },
    async headers() {
        return [
            {source: '/(.*)', headers: securityHeaders},
            {
                source: '/sitemap.xml',
                headers: [{key: 'Cache-Control', value: 'public, s-maxage=86400, stale-while-revalidate=604800'}],
            },
        ]
    },
}

module.exports = nextConfig
