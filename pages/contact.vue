<template>
  <main class="min-h-screen flex flex-col-reverse md:flex-row">
    <section class="bg-gray-300 flex-1">
      map here
    </section>

    <section class="flex-1 p-8">

      <h1 class="mt-12 text-4xl">The Louise Company</h1>

      <div class="mt-12 flex justify-between">
        <div>
          <h2 class="uppercase text-lg">Notre adresse</h2>
          <address>
            <div>Rue xxxx</div>
            <div>1040 Etterbeek</div>
            <div>Belgium</div>
          </address>
        </div>

        <div>
          <div>
            <h2 class="uppercase text-lg">Tel</h2>
            <div>0471 30 46 75</div>
          </div>
          <div>
            <h2 class="uppercase text-lg">Email</h2>
            <div>matthieu.doultremont@gmail.com</div>
          </div>
        </div>
      </div>

      <hr class="border-b my-10">

      <div class="mt-12">
        <h2 class="uppercase text-lg">Une question ?</h2>

        <form action="">
          <select
            name=""
            id=""
            class="form-select w-full mt-4"
          >
            <option
              value="price-offer"
              disabled
              selected
            >
              Vous nous contactez pour ?
            </option>
            <option value="price-offer">Demande de prix</option>
          </select>

          <div>
            <input
              type="text"
              class="form-input block w-full mt-4"
              placeholder="prénom"
            >
            <input
              type="email"
              class="form-input block w-full mt-4"
              placeholder="email"
            >
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              class="form-textarea mt-4 w-full"
            />
            <input
              type="submit"
              class="w-full p-2 bg-gray-500 rounded mt-8"
              value="Envoyer"
            >
          </div>
        </form>
      </div>
    </section>
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
