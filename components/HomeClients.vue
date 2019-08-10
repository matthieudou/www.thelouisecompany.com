<template>
  <section class="md:pt-40 bg-gray-dark text-white">
    <div class="container mx-auto p-12 flex flex-wrap">
      <div class="w-full md:w-2/5">
        <h2 class="font-serif text-5xl md:text-4xl lg:text-5xl tracking-widest">{{ localize(clients.title) }}</h2>
        <p class="w-64 mt-12">
          {{ localize(clients.content) }}
        </p>
      </div>

      <div class="w-full md:w-3/5 mt-16 flex flex-wrap items-center">
        <div
          class="w-1/2 sm:w-1/3 p-4 sm:p-8"
          v-for="client in clients.clients"
          :key="client._client"
          :title="client.name">
          <v-lazy-image
            class="w-full object-contain"
            :src="urlFor(client.thumbnail).url()"
            :src-placeholder="urlFor(client.thumbnail).width(20).url()"
            :alt="client.name"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('home', {
        clients: 'clients'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
