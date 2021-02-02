<template>
  <section
    id="hero"
    class="min-h-screen relative text-white">
    <!-- BG VIDEO -->
    <div class="absolute inset-0 overflow-hidden">
      <video
        class="w-full h-full object-cover "
        autoplay
        loop
        muted
        :poster="urlFor(hero.backgroundImage)">
        <source
          v-if="showVideo"
          src="https://res.cloudinary.com/thelouisecompany/video/upload/q_auto:eco/v1612258283/teaser_louise_2021_02.mp4"
          type="video/mp4">
      </video>
    </div>

    <!-- BLACK TRANSPARENT LAYER -->
    <div class="absolute inset-0 bg-black opacity-75" />

    <div class="absolute inset-0 flex flex-col justify-between">
      <div class="h-12 p-12" />

      <div class="container mx-auto px-container py-8 flex items-center justify-between">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="w-full lg:w-7/12 flex-shrink-0 pr-8 lg:pr-0">
            <div class="uppercase text-xs mb-4">
              {{ localize(hero.subtitle) }}
            </div>
            <h1 class="text-3xl md:text-5xl font-serif font-normal tracking-widest leading-tight">
              {{ localize(hero.title) }}
            </h1>
            <button
              class="w-40 flex items-center mt-4 focus:outline-none group"
              @click="$scrollTo('#actuality')">
              <div class="flex-1 h-px bg-white mr-6" />
              <div class="group-hover:translate-r-2 transition">
                {{ localize(hero.cta) }}
              </div>
            </button>
          </div>

          <button
            class="w-full lg:w-5/12 flex items-center lg:justify-center focus:outline-none mt-12 lg:mt-0"
            @click="videoOpen = true">
            <play-circle class="w-16 h-16" />
            <div class="w-16 ml-4 uppercase text-xs tracking-widest leading-loose">
              {{ $t('home.watchVideo') }}
            </div>
          </button>
        </div>

        <div class="self-start">
          <base-socials color="white" />
        </div>
      </div>

      <div class="container mx-auto flex justify-between items-center py-12 px-container">
        <div class="text-sm">
          <nuxt-link
            :to="switchLocalePath('fr')"
            class="opacity-50 transition"
            :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'fr'}">
            Fr
          </nuxt-link>
          <span class="opacity-75">/</span>
          <nuxt-link
            :to="switchLocalePath('en')"
            class="opacity-50 transition"
            :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'en'}">
            En
          </nuxt-link>
        </div>

        <client-only>
          <home-hashtags
            class="flex-1 font-serif"
            :items="hero.hashtags" />
        </client-only>

        <button
          class="p-2 focus:outline-none"
          @click="$scrollTo('#actuality')">
          <span class="sr-only">Scroll down</span>
          <arrow-down class="h-6" />
        </button>
      </div>
    </div>

    <base-modal
      v-if="videoOpen"
      @close="videoOpen = false"
      size="3xl"
      background-class="bg-transparent-black">
      <div class="embed-responsive">
        <iframe
          class="absolute inset-0 w-full h-full"
          :src="iframeEmbedUrl"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          autoplay="1" />
      </div>
    </base-modal>
  </section>
</template>

<script>
  import BaseSocials from '~/components/BaseSocials'
  import HomeHashtags from '~/components/HomeHashtags'
  import PlayCircle from '~/assets/images/icons/playCircle.svg'
  import ArrowDown from '~/assets/images/icons/arrowDown.svg'

  export default {
    props: {
      hero: {
        type: Object,
        required: true
      }
    },

    data () {
      return {
        videoOpen: false,
        currentHashtag: {}
      }
    },

    computed: {
      showVideo () {
        if (process.client) return !['sm', 'md'].includes(this.$mq)
        return false
      },

      iframeEmbedUrl () {
        const link = new URL(this.hero.videoLink)
        return 'https://player.vimeo.com/video/' + link.pathname.replace('/', '') + '?autoplay=1'
      }
    },

    components: {
      BaseSocials,
      HomeHashtags,
      BaseModal: () => import('~/components/BaseModal'),
      PlayCircle,
      ArrowDown
    }
  }
</script>
