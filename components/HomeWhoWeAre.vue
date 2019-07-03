<template>
  <section class="mt-16">
    <div class="container mx-auto p-12 flex flex-col md:flex-row md:items-center">
      <v-lazy-image
        class="w-full h-full md:w-2/5 object-contain"
        :src="urlFor(whoWeAre.thumbnail).url()"
        :src-placeholder="urlFor(whoWeAre.thumbnail).width(20).url()"
      />

      <div class="w-full md:w-3/5 mt-12 md:mt-0 md:pl-12">
        <h2 class="font-serif text-4xl">{{ localize(whoWeAre.title) }}</h2>
        <div class="flex flex-col lg:flex-row mt-4">
          <div class="text-xs leading-loose font-black flex-shrink-0 lg:w-32">
            {{ localize(whoWeAre.aside) }}
          </div>
          <div class="mt-8 lg:mt-0 lg:pl-8">
            <p class="leading-loose font-light">
              {{ localize(whoWeAre.content) }}
            </p>
            <nuxt-link
              class="w-32 flex items-center mt-4 focus:outline-none group"
              :to="localePath({name: 'contact'})"
            >
              <div class="flex-shrink-0 mr-4">-></div>
              <div class="group-hover:translate-r-2 transition flex-shrink-0 text-2xl font-hairline">{{ localize(whoWeAre.cta) }}</div>
            </nuxt-link>

          </div>
        </div>
      </div>
    </div>

    <!-- <div class="pl-12 h-24 flex overflow-x-hidden">
      <div class="hidden lg:block w-2/5"/>
      <v-lazy-image
        class="h-full"
        src="~/assets/images/tlcScript.svg"
      />
    </div> -->
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('home', {
        whoWeAre: 'whoWeAre'
      })
    }
  }
</script>

<style scoped>

</style>
