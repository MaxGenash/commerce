const isProd = process.env.NODE_ENV === 'production';

// const bundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: !!process.env.BUNDLE_ANALYZE
// })

module.exports =/* bundleAnalyzer(*/{
  // target: 'serverless',
  // assetPrefix: isProd ? 'https://renderer-next-spike.web.app' : '',
  images: {
    // loader: 'cloudinary',
    domains: ['cdn11.bigcommerce.com'],
  },
  distDir: '.next',
  experimental: {
    sprFlushToDisk: false,
  },
  // i18n: {
  //   locales: ['en-US', 'es'],
  //   defaultLocale: 'en-US',
  // },
  rewrites() {
    return [
      {
        source: '/checkout',
        destination: '/api/bigcommerce/checkout',
      },
      {
        source: '/checkout',
        destination: '/api/bigcommerce/checkout',
      },
      // The logout is also an action so this route is not required, but it's also another way
      // you can allow a logout!
      {
        source: '/logout',
        destination: '/api/bigcommerce/customers/logout?redirect_to=/',
      },
      {
        source: '/logout',
        destination: '/api/bigcommerce/customers/logout?redirect_to=/',
      },
      // Rewrites for /search
      {
        source: '/search/:path*',
        destination: '/search',
      },
      {
        source: '/search/designers/:name',
        destination: '/search',
      },
      {
        source: '/search/designers/:name/:category',
        destination: '/search',
      },
      {
        // This rewrite will also handle `/search/designers`
        source: '/search/:category',
        destination: '/search',
        locale: false
      },
    ]
  },
}/*)*/;
