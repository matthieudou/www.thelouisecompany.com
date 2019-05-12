import { generatedRoutes } from './utilities/sanity'
import translatedRoutes from './utilities/translatedRoutes'
require('dotenv').config()

export default {
  env: {
    sanityProjectId: process.env.SANITY_PROJECT_ID,
    sentryDsn: process.env.SENTRY_DSN,
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'thelouisecompany.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Website for The Louise Company' }
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
    { src: '~/plugins/sanity' }
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
        id: process.env.googleAnalyticsId,
        dev: false
      }
    ],
    [
      '@nuxtjs/sentry',
      {
        dsn: process.env.sentryDsn,
        config: {}
      }
    ]
  ],

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
  },

  generate: {
    routes () {
      return generatedRoutes
    },
    fallback: '404.html'
  }
}
