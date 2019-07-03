<template>
  <section
    id="hero"
    class="min-h-screen relative text-white"
    data-section-color="text-white"
  >
    <!-- BG VIDEO -->
    <div class="absolute inset-0 overflow-hidden">
      <video
        class="w-full h-full object-cover "
        autoplay
        loop
        muted
        :poster="urlFor(hero.backgroundImage)"
      >
        <source
          v-if="showVideo"
          src="~/assets/videos/backgroundVideo.webm"
          type="video/webm"
        >
        <source
          v-if="showVideo"
          src="~/assets/videos/backgroundVideo.mp4"
          type="video/mp4"
        >
      </video>
    </div>

    <!-- BLACK TRANSPARENT LAYER -->
    <div class="absolute inset-0 bg-black opacity-75"/>

    <div class="absolute inset-0 flex flex-col justify-between">

      <div class="h-12 p-12"/>

      <div class="container mx-auto p-8 md:p-12 flex items-center justify-between">

        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="w-full lg:w-7/12 flex-shrink-0 pr-8 lg:pr-0">
            <div class="uppercase text-xs mb-4">{{ localize(hero.subtitle) }}</div>
            <h1 class="text-3xl md:text-5xl font-serif font-normal tracking-widest leading-tight">{{ localize(hero.title) }}</h1>
            <button
              class="w-40 flex items-center mt-4 focus:outline-none group"
              @click="$scrollTo('#actuality')">
              <div class="flex-1 h-px bg-white mr-6"/>
              <div class="group-hover:translate-r-2 transition">{{ localize(hero.cta) }}</div>
            </button>

          </div>

          <button
            class="w-full lg:w-5/12 flex items-center lg:justify-center focus:outline-none mt-12 lg:mt-0"
            @click="videoOpen = true"
          >
            <play-circle/>
            <div class="w-16 ml-4 uppercase text-xs tracking-widest leading-loose">
              {{ $t('home.watchVideo') }}
            </div>
          </button>
        </div>

        <div class="self-start">
          <base-socials color="white"/>
        </div>
      </div>

      <div class="container mx-auto flex justify-between items-center p-12">

        <div class="text-sm">
          <nuxt-link
            :to="switchLocalePath('fr')"
            class="opacity-50 transition"
            :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'fr'}"
          >
            Fr
          </nuxt-link>
          <span class="opacity-75">/</span>
          <nuxt-link
            :to="switchLocalePath('en')"
            class="opacity-50 transition"
            :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'en'}"
          >
            En
          </nuxt-link>
        </div>

        <div class="font-serif text-lg flex flex-1">
          <transition name="hashTransition">
            <div
              class="inline-block w-1/2 text-right"
              :key="'hash1' + currentHashtag._key">
              {{ currentHashtag.hashtag1 }}
            </div>
          </transition>

          <transition name="hashTransition">
            <div
              class="inline-block w-1/2"
              style="transition-delay: .5s"
              :key="'hash2' + currentHashtag._key"
            >
              {{ currentHashtag.hashtag2 }}
            </div>
          </transition>
        </div>

        <button
          class="p-2 focus:outline-none"
          @click="$scrollTo('#actuality')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7.657"
            height="21"
            viewBox="0 0 7.657 21">
            <g
              id="Groupe_292"
              data-name="Groupe 292"
              transform="translate(-3055.638 -1390.037)">
              <g
                id="Groupe_291"
                data-name="Groupe 291">
                <line
                  id="Ligne_64"
                  data-name="Ligne 64"
                  y2="19"
                  transform="translate(3059.467 1391.037)"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"/>
                <path
                  id="Tracé_384"
                  data-name="Tracé 384"
                  d="M3062.3,1407.209l-2.828,2.828-2.828-2.828"
                  fill="none"
                  stroke="#fff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"/>
              </g>
            </g>
          </svg>

        </button>
      </div>
    </div>

    <base-modal
      v-if="videoOpen"
      @close="videoOpen = false"
      size="3xl"
      background-class="bg-transparent-black"
    >
      <div class="embed-responsive">
        <iframe
          class="absolute inset-0 w-full h-full"
          :src="iframeEmbedUrl"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          autoplay=1
        />
      </div>
    </base-modal>
  </section>
</template>

<script>
  import BaseSocials from '~/components/BaseSocials'
  import PlayCircle from '~/assets/images/icons/playCircle.svg'

  import { mapState } from 'vuex'
  import sample from 'lodash/sample'

  export default {
    data () {
      return {
        videoOpen: false,
        currentHashtag: {}
      }
    },

    computed: {
      ...mapState('home', {
        hero: 'hero'
      }),

      showVideo () {
        if (process.client) return !['sm', 'md'].includes(this.$mq)
        return false
      },

      iframeEmbedUrl () {
        const link = new URL(this.hero.videoLink)
        return 'https://player.vimeo.com/video/' + link.pathname.replace('/', '') + '?autoplay=1'
      }
    },

    mounted () {
      this.currentHashtag = sample(this.hero.hashtags)
      this.__hashInterval__ = setInterval(() => {
        // this.currentHashtag = { _key: 'sample', hash1: '', hash2: '' }

        this.currentHashtag = sample(this.hero.hashtags)
        // setTimeout(() => {
        // }, 2000)
      }, 5000)
    },

    beforeDestroy () {
      clearInterval(this.__hashInterval__)
    },

    components: {
      BaseSocials,
      BaseModal: () => import('~/components/BaseModal'),
      PlayCircle
    }
  }
</script>

<style scoped>
.hashTransition-transition-enter-active, .hashTransition-transition-leave-active {
  transition: 1s;
}

.hashTransition-transition-enter, .hashTransition-transition-leave-to {
  opacity: 0;
  transform: translateX(20px);
  position: absolute;
}
</style>
