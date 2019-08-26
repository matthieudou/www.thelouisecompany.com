<template>
  <div>
    <main>
      <home-hero />
      <home-actuality />
      <home-who-we-are />
      <home-citation />
      <home-clients />
    </main>

    <div class="bg-gray-800">
      <layout-footer class="text-white container mx-auto px-container pt-4 pb-separation" />
    </div>
  </div>
</template>

<script>
  import HomeHero from '~/components/HomeHero'
  import HomeCitation from '~/components/HomeCitation'
  import HomeClients from '~/components/HomeClients'
  import HomeWhoWeAre from '~/components/HomeWhoWeAre'
  import HomeActuality from '~/components/HomeActuality'
  import LayoutFooter from '~/components/LayoutFooter'

  import { mapMutations } from 'vuex'
  import baseTransition from '~/mixins/baseTransition'

  export default {
    mixins: [baseTransition],

    head () {
      return {
        title: this.$t('titles.home')
      }
    },

    async fetch ({ store }) {
      await store.dispatch('home/fetch')
    },

    methods: {
      ...mapMutations({
        setMenuColor: 'setMenuColor'
      })
    },

    mounted () {
      this.setMenuColor('text-white')
    },

    components: {
      HomeHero,
      HomeCitation,
      HomeClients,
      HomeWhoWeAre,
      HomeActuality,
      LayoutFooter
    }
  }
</script>

<style scoped>

</style>
