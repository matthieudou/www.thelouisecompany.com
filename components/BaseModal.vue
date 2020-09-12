<template>
  <transition
    name="modal"
    appear>
    <!-- BACKGROUND BLACK TRANSPARENT -->
    <div
      class="modal__backdrop fixed flex flex-col inset-0 z-20 overflow-auto md:py-24 transition"
      :class="backgroundClass"
      @click.self="close">
      <button
        class="absolute top-0 right-0 p-8 md:p-12 focus:outline-none"
        @click="$emit('close')">
        <span class="sr-only">Close modal</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24.749"
          height="24.749"
          viewBox="0 0 24.749 24.749">
          <line
            id="Ligne_50"
            data-name="Ligne 50"
            y1="23.335"
            x2="23.335"
            transform="translate(0.707 0.707)"
            fill="none"
            stroke="#fff"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="1" />
          <line
            id="Ligne_51"
            data-name="Ligne 51"
            x2="23.335"
            y2="23.335"
            transform="translate(0.707 0.707)"
            fill="none"
            stroke="#fff"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="1" />
        </svg>
      </button>

      <!-- MODAL CONTAINER -->
      <div
        class="modal__container w-full m-auto transition p-8"
        :class="computeClasses">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'lg'
      },
      backgroundClass: {
        type: String,
        default: 'bg-transparent-black'
      }
    },

    computed: {
      computeClasses () {
        switch (this.size) {
        case 'sm': return 'md:max-w-sm'
        case 'md': return 'md:max-w-md'
        case 'xl': return 'md:max-w-xl'
        case '2xl': return 'md:max-w-2xl'
        case '3xl': return 'md:max-w-3xl'
        default: return 'md:max-w-lg'
        }
      }
    },

    methods: {
      close () {
        this.$emit('close')
      }
    },

    created () {
      const closeHandler = e => {
        if (e.key === 'Escape') {
          this.close()
        }
      }

      document.addEventListener('keydown', closeHandler)
      document.querySelector('body').classList.add('overflow-hidden')

      this.$once('hook:destroyed', () => {
        document.removeEventListener('keydown', closeHandler)
        document.querySelector('body').classList.remove('overflow-hidden')
      })
    }
  }
</script>

<style scoped>
  .modal-enter, .modal-leave-active {
    opacity: 0;
  }

  .modal-enter .modal__container,
  .modal-leave-active .modal__container {
    transform: translateY(50px);
  }
</style>
