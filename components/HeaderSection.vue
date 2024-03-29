<template>
  <section class="bg-gray-50">
    <div class="min-h-3/4-screen container mx-auto px-8 md:px-20 pb-8 flex justify-between pt-32">
      <!-- IMAGES -->
      <div class="flex-1 flex flex-col lg:flex-row items-center lg:items-start">
        <div class="w-full pb-full sm:pb-0 sm:w-80 sm:h-80 flex-shrink-0 lg:mr-12 relative">
          <transition name="fade">
            <v-lazy-image
              :key="number"
              class="w-full h-full rounded-full object-cover absolute"
              :src="urlFor(images[number]).url()"
              :src-placeholder="urlFor(images[number]).width(20).url()"
              :alt="`Image ${number + 1}`" />
          </transition>
        </div>

        <!-- CONTENT -->
        <div class="mt-12 lg:mt-0 lg:mr-24 md:ml-16 lg:ml-20">
          <h1 class="text-4xl font-serif tracking-widest">
            <div>
              {{ title }}
            </div>
          </h1>

          <p class="mt-4 leading-loose">
            {{ text }}
          </p>

          <div class="text-center md:text-left">
            <button
              class="mt-12 focus:outline-none hover:scale transition"
              @click="$scrollTo('[data-scroll-to]', 300, {offset: -95})">
              <span class="sr-only">Scroll to next section</span>
              <arrow-down-circle class="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      <!-- SOCIALS -->
      <base-socials class="hidden sm:block" />
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

    mounted () {
      this.__headerInterval__ = setInterval(() => {
        this.number = random(this.images.length - 1)
      }, 3000)
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
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
