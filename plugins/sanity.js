import Vue from 'vue'
import { client } from '~/utils/sanity'
import imageUrlBuilder from '@sanity/image-url'

const installSanity = {
  install (vue) {
    vue.$sanity = client
    vue.prototype.$sanity = client
  }
}

const builder = imageUrlBuilder(client)

Vue.mixin({
  methods: {
    urlFor (source) {
      return builder.image(source).auto('format')
    },

    localize (value) {
      const languages = [
        this.$i18n.locale,
        ...this.$i18n.locales.filter(lang => lang.code !== this.$i18n.locale).map(lang => lang.code)
      ]
      if (Array.isArray(value)) {
        return value.map(v => this.localize(v, languages))
      } else if (typeof value == 'object') {
        if (/^locale[A-Z]/.test(value._type)) {
          const language = languages.find(lang => value[lang])
          return value[language]
        }

        return Object.keys(value).reduce((result, key) => {
          result[key] = this.localize(value[key], languages)
          return result
        }, {})
      }
      return value
    }
  }
})

Vue.use(installSanity)

export default ({ app }) => {
  app.$sanity = client
}
