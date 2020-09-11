import { gsap } from 'gsap'
// TimelineMax, Power3,

export default {
  transition: {
    css: false,
    mode: '',

    enter (el, done) {
      const container = document.querySelector('[data-transition="container"]')
      const grayFirst = document.querySelector('[data-transition="grayFirst"]')
      const graySecond = document.querySelector('[data-transition="graySecond"]')
      const grayThird = document.querySelector('[data-transition="grayThird"]')
      const black = document.querySelector('[data-transition="black"]')
      const logo = document.querySelector('[data-transition="logo"]')

      gsap.timeline({ onComplete: done })
        .call(() => { container.classList.remove('hidden') })
        .from([grayFirst, graySecond, grayThird, black, logo], {
          autoAlpha: 0,
          y: '100vh',
          ease: 'Power3.easeInOut',
          stagger: 0.07,
          duration: 1
        })
        .to([logo, black, grayThird, graySecond, grayFirst], {
          autoAlpha: 0,
          y: '-100vh',
          ease: 'Power3.easeInOut',
          duration: 1,
          stagger: 0.07
        }, '+=0.5')
        .from(el, {
          autoAlpha: 0,
          duration: 1
        }, '-=0.8')
        .set([logo, black, grayThird, graySecond, grayFirst], { clearProps: true })
        .call(() => { container.classList.add('hidden') })
    }
  }
}
