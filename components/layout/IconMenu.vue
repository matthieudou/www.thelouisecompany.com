<template>
  <button
    v-on="$listeners"
    class="focus:outline-none hamburger hamburger--slider"
    :class="{'is-active': isOpen}"
    type="button"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"/>
    </span>
  </button>
</template>

<script>
  export default {
    props: {
      isOpen: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style lang="scss" scoped>
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #000;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}

.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}

.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}

.hamburger-inner::before {
  top: -10px;
}

.hamburger-inner::after {
  bottom: -10px;
}

.hamburger--slider .hamburger-inner {
  top: 2px;
}

.hamburger--slider .hamburger-inner::before {
  top: 10px;
  transition-property: transform, opacity;
  transition-timing-function: ease;
  transition-duration: 0.15s;
}

.hamburger--slider .hamburger-inner::after {
  top: 20px;
}

.hamburger--slider.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}

.hamburger--slider.is-active .hamburger-inner::before {
  transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
  opacity: 0;
}

.hamburger--slider.is-active .hamburger-inner::after {
  transform: translate3d(0, -20px, 0) rotate(-90deg);
}
</style>
