<template>
  <header
    class="fixed w-full top-0 flex justify-between p-8 transition z-10"
    :class="isOpen ? 'text-white' : navbarTextColor"
  >
    <nuxt-link
      :to="localePath({name: 'index'})"
      class="z-20"
    >
      <img
        class="h-16"
        src="~/assets/images/logo-tlc.png"
        alt="Logo of the louise company"
      >
    </nuxt-link>

    <nuxt-link
      class="text-center z-20"
      :to="localePath({name: 'index'})"
    >
      <div>The Louise</div>
      <div>Company</div>
    </nuxt-link>

    <layout-menu-icon
      class="z-20"
      @click="isOpen = !isOpen"
      :is-open="isOpen"
    />

    <layout-menu v-show="isOpen"/>
  </header>
</template>

<script>
  import LayoutMenuIcon from '~/components/LayoutMenuIcon'
  import LayoutMenu from '~/components/LayoutMenu'

  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        isOpen: false,
        navbarTextColor: 'text-white'
      }
    },

    computed: {
      ...mapState([
        'colorSections'
      ])
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
      LayoutMenu
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
