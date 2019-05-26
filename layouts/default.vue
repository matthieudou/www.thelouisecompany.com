<template>
  <div class="bg-white h-full">
    <base-navigation/>
    <nuxt/>
    <base-footer/>
  </div>
</template>

<script>
  import BaseNavigation from '~/components/layout/BaseNavigation'
  import BaseFooter from '~/components/layout/BaseFooter'

  export default {
    components: {
      BaseNavigation,
      BaseFooter
    }
  }
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: .4s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
