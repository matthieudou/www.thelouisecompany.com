<template>
  <header
    class="fixed w-full top-0 flex justify-between p-8 transition"
    :class="{'bg-red-100': navbarIsScrolled}"
  >
    <nuxt-link
      :to="localePath({name: 'index'})"
    >
      <h1 class="flex items-center">
        <img
          class="h-12"
          src="~/assets/images/logo-tlc.png"
          alt="Logo of the louise company"
        >
        <span class="text-xl font-black ml-4">The Louise Company</span>
      </h1>
    </nuxt-link>

    <transition name="menu">
      <nav
        class="fixed w-64 bg-gray-300 right-0 inset-y-0 p-8 pt-24 text-right"
        v-show="isOpen"
      >
        <nuxt-link
          class="block mt-4 text-lg uppercase"
          :to="localePath('index')"
          @click.native="isOpen = false"
        >
          Accueil
        </nuxt-link>
        <nuxt-link
          class="block mt-4 text-lg uppercase"
          :to="localePath('production')"
          @click.native="isOpen = false"
        >
          Production
        </nuxt-link>
        <nuxt-link
          class="block mt-4 text-lg uppercase"
          :to="localePath('events')"
          @click.native="isOpen = false"
        >
          Events
        </nuxt-link>
        <nuxt-link
          class="block mt-4 text-lg uppercase"
          :to="localePath('influencers')"
          @click.native="isOpen = false"
        >
          Influencers
        </nuxt-link>
        <nuxt-link
          class="block mt-4 text-lg uppercase"
          :to="localePath('contact')"
          @click.native="isOpen = false"
        >
          Contact
        </nuxt-link>
        <div>
          Lang switcher

          <nuxt-link
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
          >
            {{ locale.code }}
          </nuxt-link>
        </div>
      </nav>
    </transition>

    <icon-menu
      @click="isOpen = !isOpen"
      :is-open="isOpen"
    />
  </header>
</template>

<script>
  import IconMenu from '~/components/layout/IconMenu'

  export default {
    data () {
      return {
        isOpen: false,
        navbarIsScrolled: false
      }
    },

    methods: {
      navigationScroll () {
        if (window.pageYOffset >= 100) {
          this.navbarIsScrolled = true
        } else {
          this.navbarIsScrolled = false
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
      IconMenu
    }
  }
</script>

<style lang="scss" scoped>
.menu-enter-active, .menu-leave-active {
  transition: all .5s ease-in-out;
}

.menu-enter, .menu-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.fadeInRight-enter-active, .fadeInRight-leave-active {
  transition: all .5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.fadeInRight-enter, .fadeInRight-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

</style>
