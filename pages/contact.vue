<template>
  <main class="container mx-auto p-8">
    <h1 class="text-4xl">Page de contact</h1>

    <div class="mt-12">
      <button
        class="p-4 bg-blue-500 rounded focus:shadow-outline focus:outline-none"
        @click="submit"
      >
        Envoyer un email
      </button>
    </div>
  </main>
</template>

<script>
  export default {
    data () {
      return {
        loading: false,
        form: {
          to: 'matthieu.doultremont@gmail.com',
          from: 'matthieudou@gmail.com',
          subject: 'Super mail envoyé',
          text: 'Bonjour c’est matthieu',
          html: '<b>Bonjour</b> c’est <i>Matthieu</i>'
        }
      }
    },

    methods: {
      async submit () {
        const url = `${process.env.FUNCTIONS_URL}/send-mail`
        const response = await this.$axios.$post(
          url,
          this.form
        )

        console.log(response)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
