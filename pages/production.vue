<template>
  <div>
    {{ $route.name }}
    <br>
    {{ items }}
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    async fetch ({ store }) {
      await store.dispatch('production/fetch')
    },

    computed: {
      ...mapState('production', {
        items: 'items'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
