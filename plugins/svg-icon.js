import Vue from 'vue'
import SvgIcon from 'vue-svgicon'
import BaseIcon from '~/components/ui/icons/BaseIcon'

Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

Vue.component('icon', BaseIcon)
