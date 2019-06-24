<template>
  <div>
    <pre>{{ actuality }}</pre>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('home', {
        actuality: 'actuality'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
