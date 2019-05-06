<template>
  <div>
    <h1 class="text-blue-500">INDEX</h1>
    <pre>{{ hello }}</pre>
  </div>
</template>

<script>
  export default {
    asyncData ({ app }) {
      return app.$sanity.fetch(`*[_type == "test"] {
        superTest,
        otherTest,
        altImage
      }`)
        .then(res => {
          return {
            hello: localize(res, [app.i18n.locale, 'en'])
          }
        })
    }
  }

  function localize (value, languages) {
    if (Array.isArray(value)) {
      return value.map(v => localize(v, languages))
    } else if (typeof value == 'object') {
      if (/^locale[A-Z]/.test(value._type)) {
        const language = languages.find(lang => value[lang])
        return value[language]
      }

      return Object.keys(value).reduce((result, key) => {
        result[key] = localize(value[key], languages)
        return result
      }, {})
    }
    return value
  }
</script>
