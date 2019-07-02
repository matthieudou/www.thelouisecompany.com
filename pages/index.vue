<template>
  <div>
    <main>
      <home-hero/>
      <home-actuality/>
      <home-who-we-are/>
      <home-citation/>
      <home-clients/>
    </main>

    <div class="bg-gray-dark">
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
