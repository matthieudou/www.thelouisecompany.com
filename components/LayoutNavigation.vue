<template>
  <header
    class="fixed inset-x-0 top-0 transition z-10"
    :class="isOpen ? 'text-white' : navbarTextColor"
  >
    <div class="container mx-auto flex justify-between items-center p-8 md:p-12">

      <nuxt-link
        :to="localePath({name: 'index'})"
        class="z-20"
      >
        <logo-round class="h-16"/>
      </nuxt-link>

      <nuxt-link
        class="hidden md:block z-20"
        :to="localePath({name: 'index'})"
      >
        <logo-name/>
      </nuxt-link>

      <button
        class="focus:outline-none z-20"
        @click="isOpen = !isOpen"
      >
        <menu-closed/>
      </button>

      <layout-menu
        @close="isOpen = false"
        v-show="isOpen"
      />
    </div>
  </header>
</template>

<script>
  import LayoutMenuIcon from '~/components/LayoutMenuIcon'
  import LayoutMenu from '~/components/LayoutMenu'
  import LogoRound from '~/assets/images/ressources/logoRound.svg'
  import LogoName from '~/assets/images/ressources/logoName.svg'
  import MenuClosed from '~/assets/images/icons/menuClosed.svg'

  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        isOpen: false,
        navbarTextColor: 'text-white'
      }
    },

    computed: {
      ...mapState({
        colorSections: 'colorSections'
      })
    },

    methods: {
      navigationScroll () {
        this.colorSections.forEach(sect => {
          if (sect.offsetTop < window.pageYOffset + 32) {
            this.navbarTextColor = sect.getAttribute('data-section-color')
          }
        })
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

    created () {
      if (process.client) {
        document.addEventListener('scroll', this.navigationScroll)
      }
    },

    beforeDestroy () {
      document.removeEventListener('scroll', this.navigationScroll)
    },

    components: {
      LayoutMenuIcon,
      LayoutMenu,
      LogoRound,
      LogoName,
      MenuClosed
    }
  }
</script>

<style scoped>
.fadeInRight-enter-active, .fadeInRight-leave-active {
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.fadeInRight-enter, .fadeInRight-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
