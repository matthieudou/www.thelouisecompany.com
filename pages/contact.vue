<template>
  <main class="min-h-screen container px-container mx-auto pt-32">
    <div class="flex flex-col-reverse md:flex-row ">
      <section class="bg-gray-300 flex-1">
        <iframe
          class="w-full h-full grayscale"
          src="https://maps.google.com/maps?q=Rue%20Veydt%2C%2074%2F76%201050%20Bruxelles%20Belgium&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0" />
      </section>

      <section class="flex-1 pl-16 flex">
        <div class="flex-1">
          <div class="mt-12 flex justify-between">
            <div>
              <h2 class="uppercase text-xs font-bold mb-2">
                {{ $t('navigation.address') }}
              </h2>
              <address class="not-italic">
                <div class="mt-1">
                  {{ localize(contact.streetName) }} {{ contact.streetNumber }}
                </div>
                <div class="mt-1">
                  {{ contact.postalCode }} {{ localize(contact.city) }}
                </div>
                <div class="mt-1">
                  {{ localize(contact.country) }}
                </div>
              </address>
            </div>

            <div>
              <div>
                <h2 class="uppercase text-xs font-bold mb-2">
                  {{ $t('navigation.phone') }}
                </h2>
                <a :href="'tel:' + contact.phone">{{ contact.phone }}</a>
              </div>
              <div class="mt-4">
                <h2 class="uppercase text-xs font-bold mb-2">
                  {{ $t('navigation.email') }}
                </h2>
                <a :href="'mailto:' + contact.email">{{ contact.email }}</a>
              </div>
            </div>
          </div>

          <hr class="border-b my-10">

          <div class="mt-12">
            <h2 class="uppercase text-xs">
              Une question ?
            </h2>

            <form action="">
              <div class="relative mt-4">
                <select
                  class="block appearance-none w-full rounded-none border border-black text-black py-3 px-4 pr-8 leading-tight focus:outline-none"
                  id="grid-state">
                  <option
                    disabled
                    selected>
                    Vous nous contactez pour ?
                  </option>
                  <option
                    v-for="(option, i) in localize(contact.contactSubjects)"
                    :key="i">
                    {{ option }}
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>

              <div class="flex mt-4">
                <input
                  type="text"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:mr-2 py-2"
                  placeholder="prénom">
                <input
                  type="text"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:ml-2 py-2"
                  placeholder="nom">
              </div>
              <div class="flex mt-4">
                <input
                  type="text"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:mr-2 py-2"
                  placeholder="email">
                <input
                  type="text"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:ml-2 py-2"
                  placeholder="entreprise (opt)">
              </div>
              <textarea
                name=""
                id=""
                rows="10"
                placeholder="Votre message"
                class="appearance-none focus:outline-none border-b border-black block w-full h-10 mt-4" />
              <input
                type="submit"
                class="appearance-none w-full p-2 bg-black text-white rounded-none mt-8 focus:outline-none focus:shadow-outline"
                value="Envoyer">
            </form>
          </div>
        </div>
        <base-socials class="hidden sm:block transition ml-12 self-center" />
      </section>
    </div>

    <div class="bg-white py-separation">
      <layout-footer class="text-black border-black" />
    </div>
  </main>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'

  import BaseSocials from '~/components/BaseSocials'
  import LayoutFooter from '~/components/LayoutFooter'

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

    computed: {
      ...mapState({
        contact: state => state.informations.contact
      })
    },

    methods: {
      ...mapMutations({
        setMenuColor: 'setMenuColor'
      }),

      async submit () {
        const url = `${process.env.FUNCTIONS_URL}/send-mail`
        const response = await this.$axios.$post(
          url,
          this.form
        )

        console.log(response)
      }
    },

    mounted () {
      this.setMenuColor('text-black bg-white')
    },

    components: {
      BaseSocials,
      LayoutFooter
    }
  }
</script>

<style scoped>
.grayscale {
  filter: grayscale(1);
}
</style>
