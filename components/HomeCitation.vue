<template>
  <section class="container mx-auto flex mt-24 -mb-16">
    <div class="w-1/2 flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="43.701"
        height="25.281"
        viewBox="0 0 43.701 25.281">
        <path
          id="Tracé_348"
          data-name="Tracé 348"
          d="M2115.908,4014.3c-4.009,1.336-8.5,4.131-8.5,7.41,0,2.673,2.673,3.28,6.438,4.01,4.495.971,6.8,2.792,6.8,6.315,0,3.644-2.794,6.8-7.41,6.8-5.588,0-9.6-4.25-9.6-10.566,0-8.5,6.317-12.877,11.9-14.7C2116.151,4013.452,2116.393,4014.059,2115.908,4014.3Z"
          transform="translate(-2103.639 -4013.557)"/>
        <path
          id="Tracé_349"
          data-name="Tracé 349"
          d="M2142.6,4014.3c-4.008,1.336-8.5,4.131-8.5,7.41,0,2.673,2.673,3.28,6.438,4.01,4.494.971,6.8,2.792,6.8,6.315,0,3.644-2.794,6.8-7.41,6.8-5.588,0-9.6-4.25-9.6-10.566,0-8.5,6.317-12.877,11.9-14.7C2142.844,4013.452,2143.087,4014.059,2142.6,4014.3Z"
          transform="translate(-2103.639 -4013.557)"/>
      </svg>

      <blockquote
        class="mt-6 tracking-widest font-serif italic text-3xl"
        v-html="localize(citation.citation)"
      />

      <div class="w-px h-12 bg-black my-4"/>

      <div class="mt-6">
        <v-lazy-image
          class="w-full object-contain"
          :src="urlFor(citation.signature).url()"
          :src-placeholder="urlFor(citation.signature).width(20).url()"
        />
      </div>
    </div>

    <div class="w-1/2">
      <v-lazy-image
        class="w-full object-cover"
        :src="urlFor(citation.thumbnail).url()"
        :src-placeholder="urlFor(citation.thumbnail).width(20).url()"
      />
    </div>
  </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('home', {
        citation: 'citation'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
