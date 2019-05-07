<template>
  <header class="flex justify-between">
    <div>LOGO</div>

    <transition name="menu">
      <div
        class="absolute w-64 bg-gray-300 right-0 inset-y-0 p-8 pt-24 text-right"
        v-if="isOpen"
      >
        <template v-for="i in 5">
          <transition
            name="fadeInRight"
            appear
            :key="i"
          >
            <div
              class="mt-4 text-lg uppercase"
              :style="`transition-delay: ${i*150}ms;`"
            >
              Hello
            </div>
          </transition>
        </template>
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
