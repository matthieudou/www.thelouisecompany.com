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
        class="h-12"
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

    <icon-menu
      class="z-20"
      @click="isOpen = !isOpen"
      :is-open="isOpen"
    />

    <base-menu v-show="isOpen"/>
  </header>
</template>

<script>
  import IconMenu from '~/components/layout/IconMenu'
  import BaseMenu from '~/components/layout/BaseMenu'

  export default {
    data () {
      return {
        isOpen: false,
        colorSections: [],
        navbarTextColor: 'text-white'
      }
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
      $route: {
        immediate: true,
        handler () {
          if (process.client) this.colorSections = document.querySelectorAll('[data-section-color]')
        }
      },

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
        this.navigationScroll()
        document.addEventListener('scroll', this.navigationScroll)
      }
    },

    beforeDestroy () {
      document.removeEventListener('scroll', this.navigationScroll)
    },

    components: {
      IconMenu,
      BaseMenu
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
