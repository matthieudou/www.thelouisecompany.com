import Vue from 'vue'
import { client } from '~/utilities/sanity'

const installSanity = {
  install (vue) {
    vue.$sanity = client
    vue.prototype.$sanity = client
  }
}

Vue.use(installSanity)

export default ({ app }) => {
  app.$sanity = client
}
