<template>
  <main>
    <header-section
      :title="title"
      :image="image"
    />

    <section class="container mx-auto">
      <article
        v-for="(item, i) in items"
        :key="item._id"
        class="mt-12 flex flex-wrap"
        :class="{
          'flex-row-reverse': i % 2 === 1
        }"
      >
        <div class="w-full md:w-1/2 p-4">
          <h3 class="uppercase text-xs tracking-wider">{{ item.clientName }}</h3>
          <h2 class="text-2xl mt-4">{{ localize(item.title) }}</h2>

          <div class="mt-12 leading-relaxed">
            {{ localize(item.description) }}
          </div>
        </div>

        <carousel-card
          class="w-full md:w-1/2 h-64 flex-shrink-0"
          :items="item.media"
        />
      </article>
    </section>
  </main>
</template>

<script>
  import HeaderSection from '~/components/HeaderSection'
  import CarouselCard from '~/components/CarouselCard'

  import { mapState } from 'vuex'
  import { sectionColor } from '~/utils/mixins'

  export default {
    mixins: [sectionColor],

    head () {
      return {
        title: this.localize(this.title),

        meta: [
          { hid: 'description', name: 'description', content: this.localize(this.meta.description) },

          // OG
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.URL },
          { hid: 'og:title', property: 'og:title', content: this.localize(this.title) },
          { hid: 'og:description', property: 'og:description', content: this.localize(this.meta.description) },
          { hid: 'og:image', property: 'og:image', content: this.urlFor(this.meta.image).width(1200).height(630).url() },

          // TWITTER
          { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
          { hid: 'twitter:url', property: 'twitter:url', content: process.env.URL },
          { hid: 'twitter:title', property: 'twitter:title', content: this.localize(this.title) },
          { hid: 'twitter:description', property: 'twitter:description', content: this.localize(this.meta.description) },
          { hid: 'twitter:image', property: 'twitter:image', content: this.urlFor(this.meta.image).width(1200).height(600).url() }
        ]
      }
    },

    async fetch ({ store }) {
      await store.dispatch('production/fetch')
    },

    computed: {
      ...mapState('production', {
        image: 'image',
        meta: 'meta',
        title: 'title',
        items: 'items'
      })
    },

    components: {
      HeaderSection,
      CarouselCard
    }
  }
</script>
