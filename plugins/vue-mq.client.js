import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})
