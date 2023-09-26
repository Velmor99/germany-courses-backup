module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ['de', 'ru'],
    defaultLocale: 'de',
    localeDetection: true,
  },
  trailingSlash: true,
};
