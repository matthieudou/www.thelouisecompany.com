<template>
  <div class="max-w-screen">
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
