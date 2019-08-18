<template>
  <div class="bg-white h-full font-sans text-sm">
    <layout-navigation/>
    <nuxt/>
  </div>
</template>

<script>
  import LayoutNavigation from '~/components/LayoutNavigation'

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
      LayoutNavigation
    }
  }
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: .4s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
