<template>
  <section
    id="actuality"
    class="container mx-auto pt-separation pb-separation px-container">
    <div class="flex items-center">
      <h2 class="font-serif text-4xl tracking-menu">
        {{ localize(actuality.title) }}
      </h2>

      <div class="w-12 h-12 flex items-center justify-between border border-black ml-auto mr-8 mt-6 rounded-full">
        <button
          class="focus:outline-none select-none p-2"
          @click="previous">
          <chevron-left class="h-3" />
        </button>

        <button
          class="focus:outline-none select-none p-2"
          @click="next">
          <chevron-right class="h-3" />
        </button>
      </div>
    </div>
    <div
      ref="links"
      class="mt-8 flex overflow-x-scroll no-scroll-bar scroll-container">
      <nuxt-link
        class="p-1 group scroll-item"
        v-for="item in actuality.items"
        :key="item._key"
        :to="localePath({name: item.link, hash: item.hash ? `#${item.hash}` : ''})">
        <div class="w-80 h-80 relative">
          <v-lazy-image
            class="w-full h-full object-cover"
            :src="urlFor(item.thumbnail).url()"
            :src-placeholder="urlFor(item.thumbnail).width(20).url()"
            :alt="item.title" />
          <div class="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition" />
          <div
            v-if="item.logo && item.logo.asset"
            class="absolute inset-0 p-20 hover-show">
            <v-lazy-image
              class="w-full h-full object-contain"
              :src="urlFor(item.logo).url()"
              :src-placeholder="urlFor(item.logo).width(20).url()"
              :alt="`${item.title} (logo)`" />
          </div>
        </div>
        <div class="border-l border-black mx-8">
          <h3 class="ml-4 pt-4 uppercase text-lg tracking-widest">
            {{ localize(item.title) }}
          </h3>

          <div class="ml-4 mt-4 uppercase text-xs font-hairline">
            {{ localize(item.type) }}
          </div>

          <long-arrow-right class="ml-4 mt-4 h-3 group-hover:translate-r-2 transition" />
        </div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  import LongArrowRight from '~/assets/images/icons/longArrowRight.svg'
  import ChevronRight from '~/assets/images/icons/chevronRight.svg'
  import ChevronLeft from '~/assets/images/icons/chevronLeft.svg'

  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('home', {
        actuality: 'actuality'
      })
    },

    methods: {
      computedTo (item) {
        let to = this.localePath({ name: item.link })
        if (item.hash) { to += '#' + item.hash }
        return to
      },

      next () {
        const linksContainer = this.$refs.links
        const width = this.$refs.links.firstChild.offsetWidth
        linksContainer.scrollBy({
          top: 0,
          left: width,
          behavior: 'smooth'
        })
      },

      previous () {
        const linksContainer = this.$refs.links
        const width = this.$refs.links.firstChild.offsetWidth
        linksContainer.scrollBy({
          top: 0,
          left: -width,
          behavior: 'smooth'
        })
      }
    },

    components: {
      LongArrowRight,
      ChevronRight,
      ChevronLeft
    }
  }
</script>

<style scoped>
.scroll-container {
  scroll-snap-type: x mandatory;
}

.scroll-item {
  scroll-snap-align: start;
}

.hover-show {
  animation: fadeOutDown .2s ease-in-out;
  @apply opacity-0;
}

.group:hover .hover-show {
  animation: fadeInUp .2s ease-in-out;
  opacity: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0) scale(.9);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 20px, 0) scale(.9);
  }
}

</style>
