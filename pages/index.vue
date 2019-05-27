<template>
  <main>
    {{ $route.name }}
    <br>
    {{ $route.path }}

    <nuxt-link :to="localePath('production')">to the production page</nuxt-link>
  </main>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>
