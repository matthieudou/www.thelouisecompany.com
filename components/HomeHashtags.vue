<template>
  <div class="relative">
    <div ref="animation"/>
    <transition
      :css="false"
      @enter="enter"
      @leave="leave">
      <div
        class="absolute w-full flex text-lg"
        :key="current._key">
        <div
          ref="firstHashtag"
          class="w-1/2 text-right">
          #{{ current.hashtag1 }}
        </div>
        <div
          ref="secondHashtag"
          class="w-1/2">
          #{{ current.hashtag2 }}
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import sample from 'lodash/sample'
  import TweenMax from 'gsap'

  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      }
    },

    data () {
      return {
        current: sample(this.items)
      }
    },

    methods: {
      setSampleHashtag () {
        const newCurrent = sample(this.items)
        if (this.current === newCurrent) return this.setSampleHashtag()
        this.current = newCurrent
      },

      enter (el, done) {
        TweenMax.from(el.firstElementChild, 1, {
          opacity: 0,
          y: '50%',
          transformStyle: 'preserve-3d',
          rotationX: 90
        })
        TweenMax.from(el.lastElementChild, 1, {
          opacity: 0,
          y: '-50%',
          rotationX: -90,
          onComplete: done
        })
      },

      leave (el, done) {
        TweenMax.to(el.firstElementChild, 1, {
          opacity: 0,
          y: '-50%',
          rotationX: -90
        })
        TweenMax.to(el.lastElementChild, 1, {
          opacity: 0,
          y: '50%',
          rotationX: 90,
          onComplete: done
        })
      }
    },

    mounted () {
      this.__hashInterval__ = setInterval(() => { this.setSampleHashtag() }, 2000)
    },

    beforeDestroy () {
      clearInterval(this.__hashInterval__)
    }
  }
</script>

<style lang="scss" scoped>

</style>
