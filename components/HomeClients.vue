<template>
  <section class="bg-gray-800 text-white">
    <div class="container mx-auto px-20 py-24 flex flex-wrap">
      <div class="w-full text-center md:text-left md:w-2/5">
        <h2 class="font-serif text-4xl tracking-widest">
          {{ localize(clients.title) }}
        </h2>
        <p class="mt-12 lg:w-64">
          {{ localize(clients.content) }}
        </p>
      </div>

      <div class="w-full md:w-3/5 mt-12 md:mt-0 flex flex-wrap items-center">
        <div
          class="w-1/2 sm:w-1/3 p-4 md:px-6 md:pb-6 lg:px-8 lg:pb-8 xl:px-16 xl:pb-16"
          v-for="client in filteredClients"
          :key="client._client"
          :title="client.name">
          <v-lazy-image
            class="w-full object-contain"
            :src="urlFor(client.thumbnail).url()"
            :src-placeholder="urlFor(client.thumbnail).width(20).url()"
            :alt="client.name" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      clients: {
        type: Object,
        required: true
      }
    },

    computed: {
      filteredClients () {
        return this.clients.clients.filter(c => c.thumbnail)
      }
    }
  }
</script>
