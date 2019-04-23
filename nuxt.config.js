import { generatedRoutes } from './utilities/sanity'
require('dotenv').config()

export default {
  env: {
    sanityProjectId: process.env.SANITY_PROJECT_ID
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
    ['nuxt-i18n',
      {
        locales: ['fr', 'en'],
        defaultLocale: 'fr',
        vueI18n: {
          fallbackLocale: 'fr'
        }
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
    }
  },

  generate: {
    routes () {
      return generatedRoutes
    },
    fallback: '404.html'
  }
}
