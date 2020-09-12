<template>
  <div>
    <main>
      <header-section
        color="yellow"
        :title="localize(management.title)"
        :text="localize(management.text)"
        :images="management.images" />
      <section
        data-scroll-to
        class="container mx-auto py-separation px-container">
        <article
          class="mt-16 first:mt-0 flex flex-wrap border-t first:border-0 pt-16 first:pt-0"
          :class="{
            'flex-row-reverse': i % 2 === 1
          }"
          :id="item.hash"
          v-for="(item, i) in management.managementItems"
          :key="item._id">
          <div
            class="w-full md:w-1/2 mb-12 md:mb-0"
            :class="i % 2 === 1 ? 'md:pl-12' : 'md:pr-12'">
            <div class="flex items-center">
              <div
                v-if="item.socials.length"
                class="mr-8">
                <div
                  v-for="social in item.socials"
                  :key="social._key"
                  class="flex items-center mt-2 first:mt-0">
                  <div class="w-6 h-6 p-1 border border-gray-900 rounded-full flex items-center justify-center">
                    <icon :name="social.socialName" />
                  </div>
                  <div class="text-lg ml-4">
                    {{ social.amount }}
                  </div>
                </div>
              </div>
              <div class="text-3xl font-serif leading-tight">
                <div>
                  {{ item.firstName }}
                </div>
                <div>
                  {{ item.lastName }}
                </div>
              </div>
            </div>

            <!-- separator -->
            <div class="my-6 h-px w-12 bg-black" />

            <div class="pb-4">
              <div class="text-xs my-2 font-bold">
                {{ localize(item.profession) }}
              </div>
              <div class="text-xs my-2 font-bold">
                {{ localize(item.sector) }}
              </div>
              <div class="text-xs my-2 font-bold">
                {{ localize(item.location) }}
              </div>
            </div>

            <div class="leading-relaxed tracking-wide text-gray-300">
              {{ localize(item.description) }}
            </div>
          </div>

          <div class="w-full md:w-1/2">
            <carousel-card
              class="w-10/12 h-80 sm:w-80 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto flex-shrink-0 relative"
              :items="item.media" />
            <div class="bg-gray-200 h-32 -mt-20" />
          </div>
        </article>
      </section>
    </main>

    <div class="bg-white container mx-auto pb-separation px-container">
      <layout-footer class="text-black border-black" />
    </div>
  </div>
</template>

<script>
  import HeaderSection from '~/components/HeaderSection'
  import CarouselCard from '~/components/CarouselCard'
  import LayoutFooter from '~/components/LayoutFooter'

  import { mapMutations } from 'vuex'
  import baseTransition from '~/mixins/baseTransition'
  import groq from 'groq'

  export default {
    mixins: [baseTransition],

    async asyncData ({ app }) {
      const query = groq`*[_id == 'managementPage'][0]`
      const response = await app.$sanity.fetch(query)

      return {
        management: response
      }
    },

    head () {
      return {
        title: this.localize(this.management.title),

        meta: [
          { hid: 'description', name: 'description', content: this.localize(this.management.meta.description) },

          // OG
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.URL + this.localePath('management') },
          { hid: 'og:title', property: 'og:title', content: this.localize(this.management.title) },
          { hid: 'og:description', property: 'og:description', content: this.localize(this.management.meta.description) },
          { hid: 'og:image', property: 'og:image', content: this.urlFor(this.management.meta.image).width(1200).height(630).url() },

          // TWITTER
          { hid: 'twitter:card', property: 'twitter:card', content: 'summary_large_image' },
          { hid: 'twitter:url', property: 'twitter:url', content: process.env.URL + this.localePath('management') },
          { hid: 'twitter:title', property: 'twitter:title', content: this.localize(this.management.title) },
          { hid: 'twitter:description', property: 'twitter:description', content: this.localize(this.management.meta.description) },
          { hid: 'twitter:image', property: 'twitter:image', content: this.urlFor(this.management.meta.image).width(1200).height(600).url() }
        ]
      }
    },

    methods: {
      ...mapMutations({
        setMenuColor: 'setMenuColor'
      })
    },

    mounted () {
      this.setMenuColor('text-black')
      if (this.$route.hash) {
        this.$scrollTo(this.$route.hash, 300, { offset: -110 })
      }
    },

    components: {
      HeaderSection,
      CarouselCard,
      LayoutFooter
    }
  }
</script>
