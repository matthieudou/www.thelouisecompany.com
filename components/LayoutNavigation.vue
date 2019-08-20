<template>
  <header
    class="fixed inset-x-0 top-0 transition z-10"
    :class="[
      isOpen ? 'text-white' : 'text-black',
      isScrolled ? 'text-black bg-white' : menuColor
  ]">
    <div
      class="container mx-auto px-container flex justify-between items-center transition"
      :class="isScrolled && !isOpen ? 'py-4' : 'py-8'">

      <nuxt-link
        :to="localePath({name: 'index'})"
        class="z-20">
        <logo-round class="h-16 w-16"/>
      </nuxt-link>

      <nuxt-link
        class="hidden md:block z-20"
        :to="localePath({name: 'index'})">
        <logo-name class="h-8"/>
      </nuxt-link>

      <button
        class="focus:outline-none z-20 w-10 h-10 flex items-center justify-center"
        @click="isOpen = !isOpen">
        <transition name="spin">
          <!-- mode="out-in" -->
          <menu-closed
            key="menuClosed"
            class="absolute w-6 h-6"
            v-if="!isOpen"/>
          <menu-open
            key="menuOpen"
            class="absolute w-5 h-5"
            v-if="isOpen"/>
        </transition>
      </button>

      <layout-menu
        @close="isOpen = false"
        v-show="isOpen"/>
    </div>
  </header>
</template>

<script>
  import LayoutMenuIcon from '~/components/LayoutMenuIcon'
  import LayoutMenu from '~/components/LayoutMenu'
  import LogoRound from '~/assets/images/ressources/logoRound.svg'
  import LogoName from '~/assets/images/ressources/logoName.svg'
  import MenuClosed from '~/assets/images/icons/menuClosed.svg'
  import MenuOpen from '~/assets/images/icons/menuOpen.svg'

  import throttle from 'lodash/throttle'
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        isOpen: false,
        isScrolled: false
      }
    },

    computed: {
      ...mapState({
        menuColor: 'menuColor'
      })
    },

    methods: {
      checkScroll () {
        window.scrollY >= 100
          ? this.isScrolled = true
          : this.isScrolled = false
      }
    },

    watch: {
      isOpen: {
        immediate: true,
        handler (val) {
          if (!process.client) return

          if (val) {
            document.querySelector('body').classList.add('overflow-hidden')
          } else {
            document.querySelector('body').classList.remove('overflow-hidden')
          }
        }
      }
    },

    mounted () {
      if (process.client) {
        document.addEventListener('scroll', throttle(this.checkScroll, 0, { leading: false }))
        this.checkScroll()
      }
    },

    beforeDestroy () {
      document.removeEventListener('scroll', throttle(this.checkScroll, 0, { leading: false }))
    },

    components: {
      LayoutMenuIcon,
      LayoutMenu,
      LogoRound,
      LogoName,
      MenuClosed,
      MenuOpen
    }
  }
</script>

<style scoped>
.spin-enter-active, .spin-leave-active {
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.spin-enter, .spin-leave-to {
  opacity: 0;
  transform: rotate(100deg);
}
</style>
