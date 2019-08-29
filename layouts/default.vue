<template>
  <div class="font-sans text-sm">
    <layout-navigation />
    <nuxt />
    <div
      data-transition="container"
      class="fixed inset-0 z-50 hidden">
      <div
        data-transition="grayFirst"
        class="absolute w-full h-full bg-gray-100" />
      <div
        data-transition="graySecond"
        class="absolute w-full h-full bg-gray-300" />
      <div
        data-transition="grayThird"
        class="absolute w-full h-full bg-gray-900" />
      <div
        data-transition="black"
        class="absolute w-full h-full bg-black" />
      <div
        data-transition="logo"
        class="absolute text-white w-full h-full flex justify-center items-center">
        <logo-round class="fill-current text-white w-56 h-56" />
      </div>
    </div>
  </div>
</template>

<script>
  import LayoutNavigation from '~/components/LayoutNavigation'
  import LogoRound from '~/assets/images/ressources/logoRound.svg'

  import { mapState } from 'vuex'

  export default {
    head () {
      return {
        meta: [
          { hid: 'description', name: 'description', content: this.localize(this.description) },

          // OG
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.URL },
          { hid: 'og:title', property: 'og:title', content: 'The Louise Company' },
          { hid: 'og:description', property: 'og:description', content: this.localize(this.description) },
          { hid: 'og:image', property: 'og:image', content: this.urlFor(this.image).width(1200).height(630).url() },

          // TWITTER
          { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
          { hid: 'twitter:url', property: 'twitter:url', content: process.env.URL },
          { hid: 'twitter:title', property: 'twitter:title', content: 'The Louise Company' },
          { hid: 'twitter:description', property: 'twitter:description', content: this.localize(this.description) },
          { hid: 'twitter:image', property: 'twitter:image', content: this.urlFor(this.image).width(1200).height(600).url() }
        ]
      }
    },

    computed: {
      ...mapState({
        description: state => state.informations.sharing.description,
        image: state => state.informations.sharing.image
      })
    },

    components: {
      LayoutNavigation,
      LogoRound
    }
  }
</script>
