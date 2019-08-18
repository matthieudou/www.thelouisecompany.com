<template>
  <footer class="flex justify-between flex-wrap border-t">
    <div class="w-full lg:w-auto flex justify-center">
      <full-logo class="mt-4 h-16"/>
    </div>
    <!-- ADDRESS -->
    <div class="mt-8 sm:w-1/2 md:w-auto">
      <h3 class="mb-2 uppercase text-xs font-black tracking-widest">Notre adresse</h3>
      <address class="not-italic">
        <div class="mt-1">{{ localize(contact.streetName) }} {{ contact.streetNumber }}</div>
        <div class="mt-1">{{ contact.postalCode }} {{ localize(contact.city) }}</div>
        <div class="mt-1">{{ localize(contact.country) }}</div>
      </address>
    </div>

    <!-- CONTACT -->
    <div class="mt-8 sm:w-1/2 md:w-auto">
      <h3 class="mb-2 uppercase text-xs font-black tracking-widest">Tel</h3>
      <a
        class="block"
        :href="`tel:${contact.phone}`">
        {{ contact.phone }}
      </a>

      <h3 class="mt-6 mb-2 uppercase text-xs font-black tracking-widest">Email</h3>
      <a
        class="block"
        :href="`mailto:${contact.email}`">
        {{ contact.email }}
      </a>
    </div>

    <!-- INFORMATIONS -->
    <div class="mt-8 sm:w-1/2 md:w-auto">
      <h3 class="uppercase text-xs font-black tracking-widest mb-2">Informations</h3>
      <div>Conditions générales</div>
      <div>Mentions légales</div>
    </div>
  </footer>
</template>

<script>
  import FullLogo from '~/assets/images/ressources/logo.svg'

  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        contact: state => state.informations.contact
      })
    },

    components: {
      FullLogo
    }
  }
</script>
