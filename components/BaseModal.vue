<template>
  <transition name="modal">

    <!-- BACKGROUND BLACK TRANSPARENT -->
    <div
      class="modal__backdrop fixed flex flex-col inset-0 z-20 overflow-auto md:py-24 transition"
      :class="backgroundClass"
      @click.self="close"
    >

      <!-- MODAL CONTAINER -->
      <div
        class="modal__container w-full m-auto rounded shadow transition bg-white"
        :class="computeClasses"
      >
        <slot/>
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
        return {
          [`md:max-w-${this.size}`]: true
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

  .bg-transparent-black {
    background-color: rgba(0, 0, 0, 0.3)
  }
</style>
