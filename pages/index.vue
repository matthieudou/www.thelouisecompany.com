<template>
  <div>
    <main>
      <home-hero :hero="hero" />
      <home-actuality :actuality="actuality" />
      <home-who-we-are :who-we-are="whoWeAre" />
      <home-citation :citation="citation" />
      <home-clients :clients="clients" />
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
  import groq from 'groq'

  export default {
    mixins: [baseTransition],

    async asyncData ({ app }) {
      const query = groq`{
        'hero': *[_type == 'homeHero'][0],
        'citation': *[_type == 'homeCitation'][0],
        'services': *[_type == 'homeServices'][0],
        'whoWeAre': *[_type == 'homeWhoWeAre'][0],
        'clients': *[_type == 'homeClients'][0],
        'actuality': *[_type == 'homeActuality'][0]
      }`
      const { hero, citation, services, whoWeAre, clients, actuality } = await app.$sanity.fetch(query)
      return {
        hero,
        citation,
        services,
        whoWeAre,
        clients,
        actuality
      }
    },

    head () {
      return {
        title: this.$t('titles.home')
      }
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
