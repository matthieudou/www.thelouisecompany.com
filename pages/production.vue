<template>
  <main class="container mx-auto p-8">
    <div
      class="bg-cover h-3/4-screen"
      :style="`background-image: url(${urlFor(image.asset || '')});`"
    >
      <h1 class="text-4xl font-bold">{{ localize(title) }}</h1>
    </div>

    <article
      v-for="(item, i) in items"
      :key="item._id"
      class="mt-12 flex"
      :class="{
        'flex-row-reverse': i % 2 === 1
      }"
    >
      <div class="w-1/2 p-4">
        <h3 class="uppercase text-xs tracking-wider">{{ item.clientName }}</h3>
        <h2 class="text-2xl mt-4">{{ localize(item.title) }}</h2>

        <div class="mt-12 leading-relaxed">
          {{ localize(item.description) }}
        </div>
      </div>

      <div class="w-1/2 h-64 flex-shrink-0 p-4">
        <img
          class="w-full h-full object-cover"
          :src="urlFor(item.images[0]).url()"
        >
      </div>
    </article>
  </main>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    async fetch ({ store }) {
      await store.dispatch('production/fetch')
    },

    computed: {
      ...mapState('production', {
        image: 'image',
        title: 'title',
        items: 'items'
      })
    }
  }
</script>
