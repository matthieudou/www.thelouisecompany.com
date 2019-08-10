<template>
  <div>
    <main>
      <home-hero data-section-color-classes="text-white"/>
      <home-actuality data-section-color-classes="text-black"/>
      <home-who-we-are data-section-color-classes="text-black"/>
      <home-citation data-section-color-classes="text-black"/>
      <home-clients data-section-color-classes="text-white"/>
    </main>

    <div
      class="bg-gray-dark"
      data-section-color-classes="text-white">
      <layout-footer class="text-white container mx-auto p-8 md:p-12"/>
    </div>
  </div>
</template>

<script>
  import HomeHero from '~/components/HomeHero'
  import HomeCitation from '~/components/HomeCitation'
  import HomeClients from '~/components/HomeClients'
  import HomeWhoWeAre from '~/components/HomeWhoWeAre'
  import HomeActuality from '~/components/HomeActuality'
  import HomeServices from '~/components/HomeServices'
  import LayoutFooter from '~/components/LayoutFooter'

  import { sectionColor } from '~/utils/mixins'

  export default {
    mixins: [sectionColor],

    async fetch ({ store }) {
      await store.dispatch('home/fetch')
    },

    mounted () {
      // comes from the mixin
      this.initializeMixin()
    },

    components: {
      HomeHero,
      HomeCitation,
      HomeClients,
      HomeWhoWeAre,
      HomeServices,
      HomeActuality,
      LayoutFooter
    }
  }
</script>

<style scoped>

</style>
