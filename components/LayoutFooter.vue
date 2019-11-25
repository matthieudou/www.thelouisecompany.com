<template>
  <footer class="flex justify-between flex-wrap border-t text-xs">
    <div class="w-full lg:w-auto flex justify-center">
      <full-logo class="mt-4 h-16" />
    </div>
    <!-- ADDRESS -->
    <div class="mt-8 sm:w-1/2 md:w-auto">
      <h3 class="mb-2 uppercase text-xs font-black tracking-widest">
        {{ contact.addressTitle }}
      </h3>
      <address class="not-italic">
        <div class="mt-1">
          {{ contact.streetName }} {{ contact.streetNumber }}
        </div>
        <div class="mt-1">
          {{ contact.postalCode }} {{ contact.city }}
        </div>
        <div class="mt-1">
          {{ contact.country }}
        </div>
      </address>
    </div>

    <!-- CONTACT -->
    <div class="mt-8 sm:w-1/2 md:w-auto">
      <h3 class="mb-2 uppercase text-xs font-black tracking-widest">
        {{ contact.phoneTitle }}
      </h3>
      <a
        class="block hover:text-gray-300 transition"
        :href="`tel:${contact.phone}`">
        {{ contact.phone }}
      </a>

      <h3 class="mt-6 mb-2 uppercase text-xs font-black tracking-widest">
        {{ contact.emailTitle }}
      </h3>
      <a
        class="block hover:text-gray-300 transition"
        :href="`mailto:${contact.email}`">
        {{ contact.email }}
      </a>
    </div>

    <!-- INFORMATIONS -->
    <div
      class="mt-8 sm:w-1/2 md:w-auto"
      v-if="contact.informationsItems.length > 0">
      <h3 class="uppercase text-xs font-black tracking-widest mb-2">
        {{ contact.informationsTitle }}
      </h3>
      <a
        v-for="item in contact.informationsItems"
        :key="item._key"
        :href="item.file"
        target="_blank"
        class="block mt-1 hover:text-gray-300 transition">
        {{ item.text }}
      </a>
    </div>
  </footer>
</template>

<script>
  import FullLogo from '~/assets/images/ressources/logo.svg'

  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        contactPage: state => state.informations.contact
      }),

      contact () {
        return this.localize(this.contactPage)
      }
    },

    components: {
      FullLogo
    }
  }
</script>
