import { TimelineMax, Power3 } from 'gsap'

export default {
  transition: {
    css: false,
    appear: true,

    enter (el, done) {
      const container = document.querySelector('[data-transition="container"]')
      const grayFirst = document.querySelector('[data-transition="grayFirst"]')
      const graySecond = document.querySelector('[data-transition="graySecond"]')
      const grayThird = document.querySelector('[data-transition="grayThird"]')
      const black = document.querySelector('[data-transition="black"]')
      const logo = document.querySelector('[data-transition="logo"]')

      const tl = new TimelineMax({ onComplete: done })

      tl
        .set(container, {
          className: '-=hidden'
        })
        .staggerFromTo([grayFirst, graySecond, grayThird, black, logo], 1, {
          opacity: 0,
          y: '100vh',
          ease: Power3.easeInOut
        }, {
          opacity: 1,
          y: 0,
          ease: Power3.easeInOut
        }, 0.07)
        .staggerTo([logo, black, grayThird, graySecond, grayFirst], 1, {
          opacity: 0,
          y: '-100vh',
          ease: Power3.easeInOut
        }, 0.07, '+=0.5')
        .fromTo(el, 1, {
          opacity: 0
        }, {
          opacity: 1
        }, '-=0.8')
        .set(container, {
          className: '+=hidden'
        })
    }
  }
}
