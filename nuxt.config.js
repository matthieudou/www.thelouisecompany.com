import translatedRoutes from './utils/translatedRoutes'

require('dotenv').config()

export default {
  env: {
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SENTRY_DSN: process.env.SENTRY_DSN,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    FUNCTIONS_URL: process.env.FUNCTIONS_URL,
    URL: process.env.URL
  },

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - The Louise Company',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~/assets/styles/main.css'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Plugins
  */
  plugins: [
    '~/plugins/sanity',
    '~/plugins/intersection-observer.client.js',
    '~/plugins/touch-events.client.js',
    '~/plugins/svg-icon.js'
  ],

  /*
  ** Modules
  */
  modules: [
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US'
          },
          {
            code: 'fr',
            iso: 'fr-BE'
          }
        ],
        defaultLocale: 'fr',
        baseUrl: 'https://www.thelouisecompany.com',
        strategy: 'prefix_and_default',
        vueI18n: {
          fallbackLocale: 'fr'
        },
        parsePages: false,
        pages: translatedRoutes
      }
    ],
    [
      '@nuxtjs/google-analytics',
      {
        id: process.env.GOOGLE_ANALYTICS_ID,
        dev: false
      }
    ],
    [
      '@nuxtjs/sentry',
      {
        dsn: process.env.SENTRY_DSN,
        disabled: process.env.NODE_ENV !== 'production'
      }
    ],
    [
      '@nuxtjs/axios',
      {
        proxy: true
      }
    ]
  ],

  proxy: {
    '/.netlify': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions': '' }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }

      config.node = {
        fs: 'empty'
      }
    },

    postcss: {
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer')
      ]
    }
  }
}
