<template>
  <header class="fixed w-full top-0 flex justify-between">
    <div>LOGO</div>

    <transition name="menu">
      <div
        class="fixed w-64 bg-gray-300 right-0 inset-y-0 p-8 pt-24 text-right"
        v-show="isOpen"
      >
        <nuxt-link
          class="block mt-4 text-lg uppercase"
          :to="localePath('index')"
          @click.native="isOpen = false"
        >
          Home
        </nuxt-link>
        <nuxt-link
          class="block mt-4 text-lg uppercase"
          :to="localePath('production')"
          @click.native="isOpen = false"
        >
          Production
        </nuxt-link>
      </div>
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
        isOpen: false
      }
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
