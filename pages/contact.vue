<template>
  <main class="min-h-screen container px-container mx-auto pt-32">
    <div class="flex flex-col-reverse md:flex-row ">
      <section class="bg-gray-300 flex-1 mt-12 md:mt-0 h-64 md:h-auto">
        <iframe
          class="w-full h-full grayscale"
          src="https://maps.google.com/maps?q=Rue%20Veydt%2C%2074%2F76%201050%20Bruxelles%20Belgium&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0" />
      </section>

      <section class="flex-1 pl-0 md:pl-16 flex">
        <div class="flex-1">
          <div class="mt-12 flex justify-between flex-wrap">
            <div class="mt-4">
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

            <div class="mt-4">
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
              {{ $t('contact.title') }}
            </h2>

            <form @submit.prevent="submit">
              <div class="relative mt-4">
                <select
                  class="block appearance-none w-full rounded-none border border-black text-black py-3 px-4 pr-8 leading-tight focus:outline-none"
                  id="grid-state"
                  v-model="form.subject"
                  required>
                  <option
                    disabled
                    value="null"
                    selected>
                    {{ $t('contact.placeholders.contact') }}
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
                  v-model="form.firstName"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:mr-2 py-2"
                  :placeholder="$t('contact.placeholders.firstName')"
                  required>
                <input
                  type="text"
                  v-model="form.lastName"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:ml-2 py-2"
                  :placeholder="$t('contact.placeholders.lastName')"
                  required>
              </div>
              <div class="flex mt-4">
                <input
                  type="email"
                  v-model="form.email"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:mr-2 py-2"
                  :placeholder="$t('contact.placeholders.email')"
                  required>
                <input
                  type="text"
                  v-model="form.company"
                  class="appearance-none focus:outline-none border-b border-black block w-full mt-4 md:ml-2 py-2"
                  :placeholder="$t('contact.placeholders.company')">
              </div>
              <textarea
                name=""
                id=""
                rows="10"
                v-model="form.text"
                placeholder="Votre message"
                class="appearance-none focus:outline-none border-b border-black block w-full h-10 mt-8"
                required />
              <input
                type="submit"
                class="appearance-none w-full p-2 bg-black text-white rounded-none mt-8 focus:outline-none focus:shadow-outline cursor-pointer"
                :class="{loading: loading}"
                :value="$t('contact.placeholders.submit')">
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
  import baseTransition from '~/mixins/baseTransition'

  export default {
    mixins: [baseTransition],

    head () {
      return {
        title: this.$t('titles.contact')
      }
    },

    data () {
      return {
        loading: false,
        form: {
          subject: null,
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          text: ''
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

      submit () {
        if (!this.form.subject) return alert('Please fill in the subject')
        const url = `${process.env.FUNCTIONS_URL}/send-mail`
        const params = {
          to: process.env.NODE_ENV === 'production' ? this.contact.email : 'matthieu.doultremont@gmail.com',
          from: this.form.email,
          subject: this.form.subject,
          text: this.form.text,
          html: `
            <div style="font-weight: bold;">Message subject :</div>
            <div>${this.form.subject}</div>
            <br><br>
            <div style="font-weight: bold;">Message from :</div>
            <div>${this.form.firstName} ${this.form.lastName} [${this.form.company}] - ${this.form.email}</div>
            <br><br>
            <div style="font-weight: bold;">Content :</div>
            <div>${this.form.text}</div>
          `
        }
        this.$axios.$post(url, params)
          .then(response => {
            alert('Message sent successfully')
            this.resetForm()
          })
          .catch(err => {
            alert('Sorry, there was an error in the sending of the message. Try again or directly send a mail.')
          })
      },

      resetForm () {
        Object.assign(this.form, {
          subject: null,
          firstName: '',
          lastName: '',
          email: '',
          company: '',
          text: ''
        })
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
