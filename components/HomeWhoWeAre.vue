<template>
  <section class="container mx-auto py-separation px-container flex flex-col md:flex-row">
    <v-lazy-image
      class="w-full md:w-2/5 object-cover"
      :src="urlFor(whoWeAre.thumbnail).url()"
      :src-placeholder="urlFor(whoWeAre.thumbnail).width(20).url()"
      :alt="whoWeAre.title + ' support image'" />

    <div class="w-full md:w-3/5 mt-12 md:mt-0 md:pl-12">
      <h2 class="font-serif text-4xl">
        {{ localize(whoWeAre.title) }}
      </h2>
      <div class="flex flex-col lg:flex-row mt-4">
        <div class="mt-8 lg:mt-0">
          <p class="leading-loose font-light">
            {{ localize(whoWeAre.content) }}
          </p>
          <nuxt-link
            class="w-32 flex items-center mt-4 focus:outline-none group"
            :to="localePath({name: 'contact'})">
            <div class="flex-shrink-0 mr-4">
              <long-arrow-right class="h-2" />
            </div>
            <div class="group-hover:translate-r-2 transition flex-shrink-0 text-2xl font-hairline">
              {{ localize(whoWeAre.cta) }}
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import LongArrowRight from '~/assets/images/icons/longArrowRight.svg'

  export default {
    props: {
      whoWeAre: {
        type: Object,
        required: true
      }
    },

    components: {
      LongArrowRight
    }
  }
</script>
