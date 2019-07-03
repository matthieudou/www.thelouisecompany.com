<template>
  <div>
    <main>
      <header-section
        class="bg-blue-lighter"
        :title="localize(production.title)"
        :text="localize(production.text)"
        :images="production.images"
        data-section-color-classes="text-black"
      />
      <section
        id="main"
        class="container mx-auto p-8 md:p-12"
        data-section-color-classes="text-black"
      >
        <article
          v-for="(item, i) in production.productionItems"
          :key="item._id"
          class="mt-16 flex flex-wrap"
          :class="{
            'flex-row-reverse': i % 2 === 1
          }"
        >
          <div class="w-full md:w-1/2 p-8">
            <h3 class="uppercase text-xs tracking-wider">{{ item.clientName }}</h3>
            <h2 class="text-2xl mt-4 font-hairline tracking-wider">{{ localize(item.title) }}</h2>
            <div class="my-6 h-px w-12 bg-black"/>

            <div class="leading-relaxed tracking-wide">
              {{ localize(item.description) }}
            </div>
          </div>

          <carousel-card
            class="w-full md:w-1/2 h-80 flex-shrink-0"
            :items="item.media"
          />
        </article>
      </section>
    </main>

    <div class="bg-white p-8 md:p-12">
      <layout-footer class="text-black container mx-auto border-black"/>
    </div>
  </div>
</template>

<script>
  import HeaderSection from '~/components/HeaderSection'
  import CarouselCard from '~/components/CarouselCard'
  import LayoutFooter from '~/components/LayoutFooter'

  import { mapState } from 'vuex'
  import { sectionColor } from '~/utils/mixins'

  export default {
    mixins: [sectionColor],

    head () {
      return {
        title: this.localize(this.production.title),

        meta: [
          { hid: 'description', name: 'description', content: this.localize(this.production.meta.description) },

          // OG
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.URL },
          { hid: 'og:title', property: 'og:title', content: this.localize(this.production.title) },
          { hid: 'og:description', property: 'og:description', content: this.localize(this.production.meta.description) },
          { hid: 'og:image', property: 'og:image', content: this.urlFor(this.production.meta.image).width(1200).height(630).url() },

          // TWITTER
          { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
          { hid: 'twitter:url', property: 'twitter:url', content: process.env.URL },
          { hid: 'twitter:title', property: 'twitter:title', content: this.localize(this.production.title) },
          { hid: 'twitter:description', property: 'twitter:description', content: this.localize(this.production.meta.description) },
          { hid: 'twitter:image', property: 'twitter:image', content: this.urlFor(this.production.meta.image).width(1200).height(600).url() }
        ]
      }
    },

    async fetch ({ store }) {
      await store.dispatch('production/fetch')
    },

    computed: {
      ...mapState('production', {
        production: 'item'
      })
    },

    mounted () {
      // comes from the mixin
      this.initializeMixin()
    },

    components: {
      HeaderSection,
      CarouselCard,
      LayoutFooter
    }
  }
</script>
