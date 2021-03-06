<template>
  <main>
    <header-section
      color="pink"
      :title="charity.title"
      :text="charity.text"
      :images="charity.images" />

    <section
      data-scroll-to
      class="container mx-auto px-container py-separation">
      <h3 class="font-bold text-xs">
        {{ charity.firstSectionSubtitle }}
      </h3>
      <h2 class="font-light text-2xl mt-4">
        {{ charity.firstSectionTitle }}
      </h2>
      <div class="border-l-2 border-black mt-4 pl-8 pt-8 text-gray-300 whitespace-pre-line">
        <p>{{ charity.firstSectionText }}</p>
      </div>
    </section>

    <section class="container mx-auto pt-separation px-container flex flex-wrap">
      <div class="w-full md:w-1/3 h-80 md:h-auto flex-shrink-0 mb-12 md:mb-0">
        <v-lazy-image
          class="w-full h-full object-cover"
          :src="urlFor(charity.secondSectionImage).url()"
          :src-placeholder="urlFor(charity.secondSectionImage).width(20).url()"
          :alt="charity.secondSectionTitle + ' support image'" />
      </div>
      <div class="w-full md:w-2/3 flex flex-col">
        <div class="flex flex-col items-center flex-1">
          <quotation-marks class="w-12 mb-4" />
          <div class="text-2xl max-w-sm text-center font-serif italic">
            {{ charity.secondSectionCitation }}
          </div>
          <div class="w-px h-10 bg-black mt-4" />
          <div class="uppercase text-xs tracking-widest font-light mt-4">
            {{ charity.secondSectionCitationAuthor }}
          </div>
        </div>
        <div class="bg-gray-200 px-20 py-12 mt-12">
          <h3 class="font-light text-2xl">
            {{ charity.secondSectionTitle }}
          </h3>
          <div class="h-px bg-black w-12 my-4" />
          <p class="text-gray-300">
            {{ charity.secondSectionText }}
          </p>
        </div>
      </div>
    </section>

    <section
      v-if="charity.mediaItems.length > 0"
      class="bg-gray-200">
      <div class="container mx-auto px-container py-separation">
        <carousel-card
          class="w-full max-w-md mx-auto h-80 flex-shrink-0"
          :items="charity.mediaItems" />
      </div>
    </section>

    <div class="bg-gray-200">
      <div class="container mx-auto px-container py-separation">
        <layout-footer class="text-black border-black" />
      </div>
    </div>
  </main>
</template>

<script>
  import HeaderSection from '~/components/HeaderSection'
  import LayoutFooter from '~/components/LayoutFooter'
  import QuotationMarks from '~/assets/images/icons/quotationMarks.svg'
  import CarouselCard from '~/components/CarouselCard'

  import { mapMutations } from 'vuex'
  import baseTransition from '~/mixins/baseTransition'

  export default {
    mixins: [baseTransition],

    async asyncData ({ app }) {
      const query = /* groq */"*[_id == 'charityPage'][0]"
      const item = await app.$sanity.fetch(query)
      return {
        item
      }
    },

    head () {
      return {
        title: this.charity.title
      }
    },

    computed: {
      charity () {
        return this.localize(this.item)
      }
    },

    methods: {
      ...mapMutations({
        setMenuColor: 'setMenuColor'
      })
    },

    mounted () {
      this.setMenuColor('text-black')
    },

    components: {
      HeaderSection,
      LayoutFooter,
      QuotationMarks,
      CarouselCard
    }
  }
</script>
