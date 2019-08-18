<template>
  <div>
    <main>
      <header-section
        color="green"
        :title="localize(event.title)"
        :text="localize(event.text)"
        :images="event.images"
        data-section-color-classes="text-black"/>
      <section
        id="main"
        class="container mx-auto p-8 md:p-12"
        data-section-color-classes="text-black">
        <article
          class="mt-16 flex flex-wrap"
          :class="{'flex-row-reverse': i % 2 === 1}"
          v-for="(item, i) in event.eventItems"
          :key="item._id">
          <div
            class="w-full md:w-1/2 pb-8 md:pb-0"
            :class="i % 2 === 1 ? 'md:pl-8' : 'md:pr-8'">
            <h3 class="uppercase text-xs tracking-wider">{{ item.category }}</h3>
            <h2 class="text-2xl mt-4 font-hairline tracking-wider">{{ localize(item.title) }}</h2>
            <div class="my-6 h-px w-12 bg-black"/>

            <div class="leading-relaxed tracking-wide">
              {{ localize(item.description) }}
            </div>
          </div>

          <carousel-card
            class="w-full md:w-1/2 h-80 flex-shrink-0"
            :items="item.media"/>
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

  import { mapState, mapMutations } from 'vuex'

  export default {

    head () {
      return {
        title: this.localize(this.event.title),

        meta: [
          { hid: 'description', name: 'description', content: this.localize(this.event.meta.description) },

          // OG
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.URL },
          { hid: 'og:title', property: 'og:title', content: this.localize(this.event.title) },
          { hid: 'og:description', property: 'og:description', content: this.localize(this.event.meta.description) },
          { hid: 'og:image', property: 'og:image', content: this.urlFor(this.event.meta.image).width(1200).height(630).url() },

          // TWITTER
          { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
          { hid: 'twitter:url', property: 'twitter:url', content: process.env.URL },
          { hid: 'twitter:title', property: 'twitter:title', content: this.localize(this.event.title) },
          { hid: 'twitter:description', property: 'twitter:description', content: this.localize(this.event.meta.description) },
          { hid: 'twitter:image', property: 'twitter:image', content: this.urlFor(this.event.meta.image).width(1200).height(600).url() }
        ]
      }
    },

    async fetch ({ store }) {
      await store.dispatch('events/fetch')
    },

    computed: {
      ...mapState('events', {
        event: 'item'
      })
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
      CarouselCard,
      LayoutFooter
    }
  }
</script>
