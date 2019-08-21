<template>
  <svgicon
    v-bind="$attrs"
    v-on="$listeners"
    :name="importedIconName" />
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        importedIconName: ''
      }
    },
    watch: {
      name: {
        handler (val) {
          import(/* webpackPrefetch: -1 */'~/icons/' + val)
            .then(res => {
              this.importedIconName = val
            })
        },
        immediate: true
      }
    }
  }
</script>
