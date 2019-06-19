<template>
  <main>
    <home-hero/>
    <home-citation/>
    <!-- <home-services/> -->
    <home-clients/>
  </main>
</template>

<script>
  import HomeHero from '~/components/HomeHero'
  import HomeServices from '~/components/HomeServices'
  import HomeCitation from '~/components/HomeCitation'
  import HomeClients from '~/components/HomeClients'

  import { sectionColor } from '~/utils/mixins'

  export default {
    mixins: [sectionColor],

    async fetch ({ store }) {
      await store.dispatch('home/fetch')
    },

    components: {
      HomeHero,
      HomeServices,
      HomeCitation,
      HomeClients
    }
  }
</script>

<style scoped>

</style>
