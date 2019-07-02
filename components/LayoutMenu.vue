<template>
  <transition name="menu">
    <nav class="fixed inset-0 bg-black overflow-scroll transition long">
      <div class="container mx-auto mt-24 md:mt-32 flex justify-between p-8">
        <base-socials class="navigation-appear-left transition"/>

        <!-- CONTACT -->
        <div class="hidden lg:flex self-end opacity-50 navigation-appear-up transition long">
          <div class="pr-8 border-r border-white flex flex-col justify-between">
            <h3 class="uppercase text-xs font-bold tracking-wider">Address</h3>
            <address class="not-italic">
              <div class="mt-1">{{ localize(contact.streetName) }} {{ contact.streetNumber }}</div>
              <div class="mt-1">{{ contact.postalCode }} {{ localize(contact.city) }}</div>
              <div class="mt-1">{{ localize(contact.country) }}</div>
            </address>
          </div>

          <div class="ml-8 ">
            <h3 class="mb-2 uppercase text-xs font-black tracking-widest">Tel</h3>
            <a
              class="block"
              :href="`tel:${contact.phone}`"
            >
              {{ contact.phone }}
            </a>

            <h3 class="mt-6 mb-2 uppercase text-xs font-black tracking-widest">Email</h3>
            <a
              class="block"
              :href="`mailto:${contact.email}`"
            >
              {{ contact.email }}
            </a>
          </div>
        </div>

        <div class="font-serif text-right tracking-menu text-3xl w-full sm:w-menu whitespace-no-wrap">
          <!-- HOME -->
          <div class="border-b border-white pb-4 navigation-appear-up transition">
            <nuxt-link
              class="link"
              :to="localePath('index')"
              exact
              @click.native="$emit('close')"
            >
              Accueil
            </nuxt-link>
          </div>

          <!-- WORK -->
          <div class="border-b border-white pb-8 navigation-appear transition long">
            <div
              class="uppercase text-xs font-sans mt-4 tracking-widest navigation-appear-up transition long"
              :style="{'transition-delay': '.03s'}"
            >
              Work
            </div>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.06s'}"
              :to="localePath('production')"
              v-if="activePages.production"
              @click.native="$emit('close')"
            >
              Louise production
            </nuxt-link>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.09s'}"
              :to="localePath('events')"
              v-if="activePages.events"
              @click.native="$emit('close')"
            >
              Louise Events
            </nuxt-link>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.12s'}"
              :to="localePath('management')"
              v-if="activePages.management"
              @click.native="$emit('close')"
            >
              Louise Management
            </nuxt-link>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.15s'}"
              :to="localePath('charity')"
              v-if="activePages.charity"
              @click.native="$emit('close')"
            >
              Louise Charity
            </nuxt-link>
          </div>

          <!-- CONTACT -->
          <div class="pt-4">
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.18s'}"
              :to="localePath('contact')"
              @click.native="$emit('close')"
            >
              Contact
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="py-4 md:py-8 px-8 text-xs font-hairline container mx-auto navigation-appear transition long">
        <nuxt-link
          :to="switchLocalePath('fr')"
          class="opacity-50 transition long"
          :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'fr'}"
        >
          Fr
        </nuxt-link>
        <span class="opacity-75">/</span>
        <nuxt-link
          :to="switchLocalePath('en')"
          class="opacity-50 transition long"
          :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'en'}"
        >
          En
        </nuxt-link>
      </div>
    </nav>
  </transition>
</template>

<script>
  import BaseSocials from '~/components/BaseSocials'

  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        activePages: state => state.informations.activePages,
        contact: state => state.informations.contact
      })
    },

    components: {
      BaseSocials
    }
  }
</script>

<style scoped>
 .menu-enter {
   opacity: 0;
 }

 .menu-leave-to {
   opacity: 0;
 }

.menu-enter .navigation-appear,
.menu-leave-to .navigation-appear {
  opacity: 0;
}

.menu-enter .navigation-appear-up,
.menu-leave-to .navigation-appear-up {
  transform: translateY(50px);
  opacity: 0;
}

.menu-enter .navigation-appear-left,
.menu-leave-to .navigation-appear-left {
  transform: translateX(-50px);
  opacity: 0;
}

.link {
  @apply flex justify-end items-center mt-4 opacity-50;
}

.link:after {
  content: "";
  transition: .2s ease-in-out;
  @apply border-b border-white w-0;
}

.link:hover:after {
  content: "";
  @apply w-4 ml-4;
}

.nuxt-link-active.link {
  @apply opacity-100;
}

.nuxt-link-active.link:after {
  content: "";
  @apply w-full ml-4;
}

.link:first-child {
  @apply mt-0;
}
</style>
