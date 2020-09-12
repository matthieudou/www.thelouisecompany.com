<template>
  <div class="relative">
    <transition
      :css="false"
      @enter="enter"
      @leave="leave">
      <div
        class="absolute w-full flex items-center inset-y-0 text-lg"
        :key="current._key">
        <div
          ref="firstHashtag"
          class="w-1/2 flex items-center justify-end">
          <span
            v-for="(letter, x) in `#${current.hashtag1}`"
            :key="letter+x">{{ letter }}</span>
        </div>
        <div
          ref="secondHashtag"
          class="w-1/2 flex items-center">
          <span
            v-for="(letter, x) in `#${current.hashtag2}`"
            :key="letter+x">{{ letter }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import sample from 'lodash/sample'
  import { gsap } from 'gsap'

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
        gsap.from(el.firstElementChild.childNodes, {
          autoAlpha: 0,
          y: 10,
          transformStyle: 'preserve-3d',
          rotationX: 90,
          duration: 0.5,
          stagger: 0.05
        })
        gsap.from(el.lastElementChild.childNodes, {
          autoAlpha: 0,
          y: -10,
          rotationX: -90,
          onComplete: done,
          duration: 0.5,
          stagger: 0.05
        })
      },

      leave (el, done) {
        gsap.to(el.firstElementChild.childNodes, {
          opacity: 0,
          y: -10,
          rotationX: -90,
          duration: 0.5,
          stagger: 0.05
        })
        gsap.to(el.lastElementChild.childNodes, {
          opacity: 0,
          y: 10,
          rotationX: 90,
          onComplete: done,
          duration: 0.5,
          stagger: 0.05
        })
      }
    },

    mounted () {
      this.__hashInterval__ = setInterval(() => { this.setSampleHashtag() }, 3000)
    },

    beforeDestroy () {
      clearInterval(this.__hashInterval__)
    }
  }
</script>
