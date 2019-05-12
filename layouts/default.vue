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
