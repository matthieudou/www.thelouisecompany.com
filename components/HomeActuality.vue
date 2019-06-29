<template>
  <section class="container mx-auto p-12">
    <h2 class="font-serif text-4xl tracking-menu">
      {{ localize(actuality.title) }}
    </h2>

    <div class="mt-8 flex overflow-x-scroll no-scroll-bar">
      <nuxt-link
        class="p-1 group"
        v-for="item in actuality.items"
        :key="item._key"
        :to="localePath({name: item.link})"
      >
        <div class="w-80 h-80 relative">
          <v-lazy-image
            class="w-full h-full object-cover"
            :src="urlFor(item.thumbnail).url()"
            :src-placeholder="urlFor(item.thumbnail).width(20).url()"
          />
          <div class="absolute inset-0 bg-black opacity-25 group-hover:opacity-50 transition"/>
          <div class="absolute inset-0 p-20 hover-show">
            <v-lazy-image
              class="w-full h-full object-contain hover-show"
              :src="urlFor(item.logo).url()"
              :src-placeholder="urlFor(item.logo).width(20).url()"
            />
          </div>
        </div>
        <div class="border-l border-black mx-8">
          <h3 class="ml-4 pt-4 uppercase text-lg tracking-widest">{{ localize(item.title) }}</h3>

          <div class="ml-4 mt-4 uppercase text-xs font-hairline">
            {{ localize(item.type) }}
          </div>

          <svg
            class="ml-4 mt-4 group-hover:translate-r-2 transition"
            xmlns="http://www.w3.org/2000/svg"
            width="62.451"
            height="11.62"
            viewBox="0 0 62.451 11.62">
            <g
              id="Groupe_283"
              data-name="Groupe 283"
              transform="translate(0.5 0.354)">
              <line
                id="Ligne_59"
                data-name="Ligne 59"
                x1="60.851"
                transform="translate(0 5.456)"
                fill="none"
                stroke="#000"
                stroke-linecap="square"
                stroke-miterlimit="10"
                stroke-width="1"/>
              <path
                id="Tracé_368"
                data-name="Tracé 368"
                d="M2015.141,2937.019l5.456,5.456-5.456,5.456"
                transform="translate(-1959.354 -2937.019)"
                fill="none"
                stroke="#000"
                stroke-miterlimit="10"
                stroke-width="1"/>
            </g>
          </svg>

        </div>
      </nuxt-link>
    </div>
  </section>
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

<style scoped>
.hover-show {
  animation: fadeOutDown .2s ease-in-out;
  @apply opacity-0;
}

.group:hover .hover-show {
  animation: fadeInUp .2s ease-in-out;
  opacity: 1;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 20px, 0) scale(.9);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutDown {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 20px, 0) scale(.9);
  }
}

</style>