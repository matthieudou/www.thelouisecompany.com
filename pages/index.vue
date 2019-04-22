<template>
  <div>
    <h1>INDEX</h1>
    <pre>{{ hello }}</pre>
  </div>
</template>

<script>
  export default {
    asyncData ({ app }) {
      return app.$sanity.fetch(`*[_type == "test"]`)
        .then(res => {
          return {
            hello: res
          }
        })
    }
  }
</script>
