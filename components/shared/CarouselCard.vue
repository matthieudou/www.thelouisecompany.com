<template>
  <div class="relative">
    <transition :name="transitionName">
      <v-lazy-image
        class="absolute w-full h-full object-cover"
        v-touch:swipe.left="next"
        v-touch:swipe.right="previous"
        :key="currentIndex"
        :src="urlFor(items[currentIndex]).url()"
        :src-placeholder="urlFor(items[currentIndex]).width(20).url()"
      />
    </transition>

    <!-- CONTROLS -->
    <span class="absolute centered">
      <transition :name="transitionName">
        <button
          v-show="(items[currentIndex] || {}).link"
          @click="videoOpen = true"
        >
          Play
        </button>
      </transition>
    </span>

    <template v-if="items.length > 1">
      <div class="absolute bottom-0 right-0">
        <span
          v-for="(i, idx) in items.length"
          :key="idx"
          class="text-gray-300 text-xl cursor-pointer select-none"
          :class="{'text-gray-700': idx === currentIndex}"
          @click="setIndex(idx)"
        >
          •
        </span>
      </div>

      <button
        class="absolute top-0 left-0 focus:outline-none focus:shadow-outline select-none"
        @click="previous"
      >
        ←
      </button>

      <button
        class="absolute top-0 right-0 focus:outline-none focus:shadow-outline select-none"
        @click="next"
      >
        →
      </button>
    </template>

    <base-modal
      v-if="videoOpen"
      @close="videoOpen = false"
      size="2xl"
      background-class="bg-white"
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
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image'
  import BaseModal from '~/components/shared/BaseModal'

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
      VLazyImage,
      BaseModal
    }
  }
</script>

<style scoped>
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

.embed-responsive {
  position: relative;
  padding-bottom: 56.25%;
  width: 100%;
}
</style>
