<template>
  <section>
    <!-- header -->
    <div class="bg-gray-200 pb-40 pt-12">
      <div class="container mx-auto">
        <h2 class="text-4xl tracking-menu font-serif">{{ localize(services.title) }}</h2>
        <div class="mt-8 flex items-center">
          <span class="h-px w-12 bg-black mr-4"/>
          <span class="uppercase text-xs tracking-widest">{{ localize(services.subtitle) }}</span>
        </div>
      </div>
    </div>

    <div class="container mx-auto flex translate-t-32">
      <div
        class="px-1 w-1/4"
        v-for="service in services.services"
        :key="service._key"
      >
        <v-lazy-image
          class="w-full h-64 object-cover"
          :src="urlFor(service.thumbnail).url()"
          :src-placeholder="urlFor(service.thumbnail).width(20).url()"
        />
        <div>
          <h4 class="mt-6 text-xs uppercase font-black tracking-widest">Louise</h4>
          <h3 class="mt-6 text-2xl font-hairline tracking-widest">{{ localize(service.title) }}</h3>

          <ul class="mt-8 list-disc list-inside">
            <li
              v-for="item in service.checks"
              :key="item._key"
            >
              {{ localize(item) }}
            </li>
          </ul>
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
        services: 'services'
      })
    }
  }
</script>

<style scoped>
.translate-t-32 {
  transform: translateY(-8rem);
}
</style>
