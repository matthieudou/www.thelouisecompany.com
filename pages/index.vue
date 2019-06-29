<template>
  <main>
    <home-hero/>
    <home-actuality/>
    <home-who-we-are/>
    <home-citation/>
    <home-clients/>
    <!-- <home-services/> -->
  </main>
</template>

<script>
  import HomeHero from '~/components/HomeHero'
  import HomeCitation from '~/components/HomeCitation'
  import HomeClients from '~/components/HomeClients'
  import HomeWhoWeAre from '~/components/HomeWhoWeAre'
  import HomeActuality from '~/components/HomeActuality'
  import HomeServices from '~/components/HomeServices'

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
      HomeActuality
    }
  }
</script>

<style scoped>

</style>
