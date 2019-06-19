<template>
  <section class="pt-24 bg-gray-dark text-white">
    <div class="container mx-auto flex">
      <div class="w-2/5">
        <h2 class="font-serif text-5xl tracking-widest">{{ localize(clients.title) }}</h2>
        <p class="w-64 mt-12">
          {{ localize(clients.content) }}
        </p>
      </div>

      <div class="w-3/5 mt-16 flex flex-wrap items-center">
        <div
          class="w-1/3 p-8"
          v-for="client in clients.clients"
          :key="client._client"
          :title="client.name"
        >
          <v-lazy-image
            class="w-full object-contain"
            :src="urlFor(client.thumbnail).url()"
            :src-placeholder="urlFor(client.thumbnail).width(20).url()"
            :alt="client.name"
          />
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
