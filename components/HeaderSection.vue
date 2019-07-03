<template>
  <section :class="computeBackgroundColor">
    <div class="min-h-3/4-screen container mx-auto p-8 md:p-12 flex items-center justify-between">
      <!-- IMAGES -->
      <div
        :class="computeActiveColor"
        class="rounded-full overflow-hidden border-8 w-80 h-80 flex-shrink-0 relative mr-24">
        <transition name="fade">
          <v-lazy-image
            :key="number"
            class="inset-0 w-full h-full absolute object-cover"
            :src="urlFor(images[number]).url()"
            :src-placeholder="urlFor(images[number]).width(20).url()"
          />
        </transition>
      </div>

      <!-- CONTENT -->
      <div class="mr-24 self-end">
        <h1 class="text-4xl font-serif tracking-widest">
          <div class="-mb-3">
            Louise
          </div>
          <div>
            {{ title }}
          </div>
        </h1>
        <p class="mt-4 leading-loose">
          {{ text }}
        </p>

        <button
          class="mt-12 focus:outline-none"
          @click="$scrollTo('#main')"
        >
          <arrow-down-circle/>
        </button>
      </div>

      <!-- SOCIALS -->
      <base-socials class="self-center"/>
    </div>
  </section>
</template>

<script>
  import BaseSocials from '~/components/BaseSocials'
  import ArrowDownCircle from '~/assets/images/icons/arrowDownCircle.svg'

  import random from 'lodash/random'

  export default {
    props: {
      images: {
        type: Array,
        required: true
      },
      title: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      },
      color: {
        type: String,
        required: true
      }
    },

    data () {
      return {
        number: random(this.images.length - 1)
      }
    },

    computed: {
      computeBackgroundColor () {
        if (this.color === 'blue') return 'bg-blue-lighter'
      },

      computeActiveColor () {
        if (this.color === 'blue') return 'border-blue-light bg-blue-light'
      }
    },

    mounted () {
      this.__headerInterval__ = setInterval(() => {
        this.number = random(this.images.length - 1)
      }, 5000)
    },

    beforeDestroy () {
      clearInterval(this.__headerInterval__)
    },

    components: {
      BaseSocials,
      ArrowDownCircle
    }
  }
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
