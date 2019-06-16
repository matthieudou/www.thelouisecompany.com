<template>
  <main>
    <section
      id="hero"
      class="h-screen bg-gray-900 relative flex flex-col justify-between text-white"
      data-section-color="text-white"
    >
      <div/>

      <div class="container mx-auto flex items-center justify-between">
        <div>
          <div class="uppercase text-xs mb-4">Lorem ipsum</div>
          <h1 class="text-5xl max-w-md font-serif font-normal">We are a <span class="italic">digital</span> production agency</h1>
          <button class="w-32 flex items-center mt-4 focus:outline-none group">
            <div class="flex-1 h-px bg-white mr-6"/>
            <div class="group-hover:translate-r-2 transition">Discover</div>
          </button>

        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="text-white stroke-current fill-current"
          width="64"
          height="64"
          viewBox="0 0 64 64"
        >
          <g
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <circle
              fill="none"
              stroke-miterlimit="10"
              cx="32"
              cy="32"
              r="30"
            />
            <polygon
              data-color="color-2"
              fill="none"
              stroke-miterlimit="10"
              points=" 24,46 24,18 44,32 "
            />
          </g>
        </svg>
        <div class="self-start">
          <base-socials/>
        </div>
      </div>

      <div class="container mx-auto flex justify-between items-center py-8">
        <div>
          fr/en
        </div>

        <div class="font-serif text-lg">
          #Défilé
        </div>

        <div>
          down
        </div>
      </div>
    </section>

    <section
      id="who-we-are"
      class="h-screen"
      data-section-color="text-black"
    >
      <h2>who we are ?</h2>
    </section>
  </main>
</template>

<script>
  import BaseSocials from '~/components/BaseSocials'

  import { sectionColor } from '~/utils/mixins'

  export default {
    mixins: [sectionColor],

    async fetch ({ store }) {
      await store.dispatch('home/fetch')
    },

    components: {
      BaseSocials
    }
  }
</script>

<style scoped>

</style>
