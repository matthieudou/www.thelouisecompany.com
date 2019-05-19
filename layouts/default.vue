<template>
  <div class="bg-white h-full relative">
    <base-navigation/>
    <nuxt/>
  </div>
</template>

<script>
  import BaseNavigation from '~/components/layout/BaseNavigation'

  export default {
    components: {
      BaseNavigation
    }
  }
</script>

<style>
.page-enter-active, .page-leave-active {
  transition: 1s;
}

.page-enter, .page-leave-to {
  opacity: 0;
}
</style>
