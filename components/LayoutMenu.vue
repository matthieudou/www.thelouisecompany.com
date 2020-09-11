<template>
  <transition name="menu">
    <nav class="fixed inset-0 text-white bg-black transition long">
      <div class="container mx-auto mt-24 md:mt-32 flex justify-between pt-separation px-container">
        <base-socials
          color="white"
          class="hidden sm:block navigation-appear-left transition" />

        <!-- CONTACT -->
        <div class="hidden lg:flex self-end opacity-50 navigation-appear-up transition long text-xs">
          <div class="pr-8 border-r border-white flex flex-col justify-between">
            <h3 class="uppercase font-bold tracking-wider">
              {{ $t('navigation.address') }}
            </h3>
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

          <div class="ml-8 ">
            <h3 class="mb-2 uppercase font-black tracking-widest">
              {{ $t('navigation.phone') }}
            </h3>
            <a
              class="block"
              :href="`tel:${contact.phone}`">
              {{ contact.phone }}
            </a>

            <h3 class="mt-6 mb-2 uppercase font-black tracking-widest">
              {{ $t('navigation.email') }}
            </h3>
            <a
              class="block"
              :href="`mailto:${contact.email}`">
              {{ contact.email }}
            </a>
          </div>
        </div>

        <div class="font-serif text-right tracking-widest text-2xl w-full sm:w-menu whitespace-no-wrap">
          <!-- HOME -->
          <div class="border-b border-gray-300 pb-4 navigation-appear-up transition">
            <nuxt-link
              class="link"
              :to="localePath('index')"
              exact
              @click.native="$emit('close')">
              {{ $t('navigation.home') }}
            </nuxt-link>
          </div>

          <!-- WORK -->
          <div class="border-b border-gray-300 pb-8 navigation-appear transition long">
            <div
              class="uppercase text-xs font-sans mt-8 tracking-widest navigation-appear-up transition long"
              :style="{'transition-delay': '.03s'}">
              Work
            </div>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.06s'}"
              :to="localePath('production')"
              v-if="activePages.production"
              @click.native="$emit('close')">
              {{ $t('navigation.production') }}
            </nuxt-link>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.09s'}"
              :to="localePath('events')"
              v-if="activePages.events"
              @click.native="$emit('close')">
              {{ $t('navigation.events') }}
            </nuxt-link>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.12s'}"
              :to="localePath('management')"
              v-if="activePages.management"
              @click.native="$emit('close')">
              {{ $t('navigation.management') }}
            </nuxt-link>
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.15s'}"
              :to="localePath('charity')"
              v-if="activePages.charity"
              @click.native="$emit('close')">
              {{ $t('navigation.charity') }}
            </nuxt-link>
          </div>

          <!-- CONTACT -->
          <div class="pt-4">
            <nuxt-link
              class="link navigation-appear-up transition long"
              :style="{'transition-delay': '.18s'}"
              :to="localePath('contact')"
              @click.native="$emit('close')">
              {{ $t('navigation.contact') }}
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="py-4 md:py-8 px-8 text-xs font-hairline container mx-auto navigation-appear transition long">
        <nuxt-link
          :to="switchLocalePath('fr')"
          class="opacity-50 transition long"
          :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'fr'}">
          Fr
        </nuxt-link>
        <span class="opacity-75">/</span>
        <nuxt-link
          :to="switchLocalePath('en')"
          class="opacity-50 transition long"
          :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'en'}">
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
  @apply flex justify-end items-center mt-2 opacity-50;
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
