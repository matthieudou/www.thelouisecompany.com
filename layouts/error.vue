<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      error: {
        type: Object,
        required: true
      }
    }
  }
</script>
