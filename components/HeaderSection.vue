<template>
  <section
    class="bg-cover h-3/4-screen flex items-center justify-center"
    :style="`background-image: url(${urlFor(image.asset || '')});`"
  >
    <h1 class="text-4xl font-bold">{{ localize(title) }}</h1>
  </section>
</template>

<script>
  export default {
    props: {
      image: {
        type: Object,
        required: true
      },
      title: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>
