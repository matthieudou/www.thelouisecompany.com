<template>
  <div>
    {{ $route.name }}
    <br>
    {{ $route.path }}
  </div>
</template>

<script>
  export default {
    nuxtI18n: () => ({
      paths: {
        en: '/hello',
        fr: '/super-test'
      }
    })
  }
</script>

<style lang="scss" scoped>

</style>
