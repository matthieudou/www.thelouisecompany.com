<template>
  <main>
    <home-hero/>
    <home-services/>
  </main>
</template>

<script>
  import HomeHero from '~/components/HomeHero'
  import HomeServices from '~/components/HomeServices'

  import { sectionColor } from '~/utils/mixins'

  export default {
    mixins: [sectionColor],

    async fetch ({ store }) {
      await store.dispatch('home/fetch')
    },

    components: {
      HomeHero,
      HomeServices
    }
  }
</script>

<style scoped>

</style>
