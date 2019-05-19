import Vue from 'vue'
import { client } from '~/utils/sanity'

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
