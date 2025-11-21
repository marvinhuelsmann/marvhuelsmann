/** @type {import('next-i18next').UserConfig} */
module.exports = {
    debug: process.env.NODE_ENV === 'development',
    reactStrictMode: true,
    i18n: {
        defaultLocale: 'us',
        locales: ['de', 'us', 'fr', 'sp'],
        localeDetection: false
    },
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./locales')
            : '/locales',

    reloadOnPrerender: process.env.NODE_ENV === 'development',

}