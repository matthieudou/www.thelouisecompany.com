<template>
  <main>
    <home-hero/>
    <home-who-we-are/>
    <home-services/>
    <home-citation/>
    <home-clients/>
  </main>
</template>

<script>
  import HomeHero from '~/components/HomeHero'
  import HomeCitation from '~/components/HomeCitation'
  import HomeClients from '~/components/HomeClients'
  import HomeWhoWeAre from '~/components/HomeWhoWeAre'
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
      HomeServices
    }
  }
</script>

<style scoped>

</style>
