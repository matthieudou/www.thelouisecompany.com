<template>
  <div class="">
    <div class="relative w-full h-72 overflow-hidden">
      <transition :name="transitionName">
        <v-lazy-image
          class="absolute w-full h-full object-cover"
          v-touch:swipe.left="next"
          v-touch:swipe.right="previous"
          :key="currentIndex"
          :src="urlFor(items[currentIndex]).url()"
          :src-placeholder="urlFor(items[currentIndex]).width(20).url()"/>
      </transition>

      <!-- CONTROLS -->
      <transition name="fade">
        <button
          class="absolute inset-0 w-full h-full flex items-center justify-center focus:outline-none bg-transparent-black-light"
          v-show="(items[currentIndex] || {}).link"
          @click="videoOpen = true">
          <play-circle class="w-12 h-12"/>
        </button>
      </transition>

      <div
        class="absolute bottom-0 inset-x-0 text-center"
        v-if="items.length > 1">
        <span
          v-for="(i, idx) in items.length"
          :key="idx"
          class="text-gray-600 text-xl cursor-pointer select-none"
          :class="{'active-bullet': idx === currentIndex}"
          @click="setIndex(idx)">
          •
        </span>
      </div>
    </div>

    <div
      class="w-12 h-12 flex items-center justify-between border border-black ml-auto mr-8 mt-6 rounded-full"
      v-if="items.length > 1">
      <button
        class="focus:outline-none select-none p-2"
        @click="previous">
        <chevron-left class="h-3"/>
      </button>

      <button
        class="focus:outline-none select-none p-2"
        @click="next">
        <chevron-right class="h-3"/>
      </button>
    </div>

    <base-modal
      v-if="videoOpen"
      @close="videoOpen = false"
      size="2xl"
      background-class="bg-black">
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
  </div>
</template>

<script>
  import BaseModal from '~/components/BaseModal'
  import PlayCircle from '~/assets/images/icons/playCircle.svg'
  import ChevronRight from '~/assets/images/icons/chevronRight.svg'
  import ChevronLeft from '~/assets/images/icons/chevronLeft.svg'

  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        currentIndex: 0,
        transitionName: '',
        videoOpen: false
      }
    },

    computed: {
      iframeEmbedUrl () {
        if ((this.items[this.currentIndex] || {}).link) {
          const link = new URL(this.items[this.currentIndex].link)
          return 'https://player.vimeo.com/video/' + link.pathname.replace('/', '') + '?autoplay=1'
        }
        return ''
      }
    },

    methods: {
      next () {
        this.transitionName = 'fadeInRight'
        this.setIndex(this.currentIndex + 1)
      },

      previous () {
        this.transitionName = 'fadeInLeft'
        this.setIndex(this.currentIndex - 1)
      },

      setIndex (idx) {
        this.currentIndex = this.computeIndex(idx)
      },

      computeIndex (idx) {
        if (idx === this.items.length) return 0
        if (idx < 0) return this.items.length - 1
        return idx
      }
    },

    components: {
      BaseModal,
      PlayCircle,
      ChevronRight,
      ChevronLeft
    }
  }
</script>

<style scoped>
.active-bullet {
  @apply text-white;
}

.fadeInRight-enter {
  opacity: 0;
  transform: translateX(20px);
}

.fadeInRight-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.fadeInRight-enter-active, .fadeInRight-leave-active {
  transition: .3s;
}

.fadeInLeft-enter {
  opacity: 0;
  transform: translateX(-20px);
}

.fadeInLeft-leave-to {
  opacity: 0;
  transform: translateX(20px);
}

.fadeInLeft-enter-active, .fadeInLeft-leave-active {
  transition: .3s;
}

.centered {
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
