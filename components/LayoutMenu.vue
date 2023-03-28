<template>
  <transition name="menu">
    <nav class="fixed inset-0 text-white bg-black transition long">
      <div class="container mx-auto mt-24 md:mt-32 flex justify-between pt-separation px-container">
        <BaseSocials
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
                {{ localize(informations.contact.streetName) }} {{ informations.contact.streetNumber }}
              </div>
              <div class="mt-1">
                {{ informations.contact.postalCode }} {{ localize(informations.contact.city) }}
              </div>
              <div class="mt-1">
                {{ localize(informations.contact.country) }}
              </div>
            </address>
          </div>

          <div class="ml-8 ">
            <h3 class="mb-2 uppercase font-black tracking-widest">
              {{ $t('navigation.phone') }}
            </h3>
            <a
              class="block"
              :href="`tel:${informations.contact.phone}`">
              {{ informations.contact.phone }}
            </a>

            <h3 class="mt-6 mb-2 uppercase font-black tracking-widest">
              {{ $t('navigation.email') }}
            </h3>
            <a
              class="block"
              :href="`mailto:${informations.contact.email}`">
              {{ informations.contact.email }}
            </a>
          </div>
        </div>

        <div class="font-serif text-right tracking-widest text-2xl w-full sm:w-menu">
          <!-- HOME -->
          <div class="border-b border-gray-300 pb-4 navigation-appear-up transition overflow-hidden">
            <NuxtLink
              class="link transition"
              :to="localePath('index')"
              exact
              @click.native="$emit('close')">
              {{ $t('navigation.home') }}
            </NuxtLink>
          </div>

          <!-- WORK -->
          <div class="border-b border-gray-300 pb-8 navigation-appear transition">
            <div
              class="uppercase text-xs font-sans mt-8 tracking-widest navigation-appear-up transition"
              :style="{'transition-delay': '.03s'}">
              Work
            </div>

            <div class="w-full overflow-hidden">
              <NuxtLink
                v-for="(link, linkIndex) in links"
                class="link navigation-appear-up transition"
                :key="linkIndex"
                :to="link.to"
                :style="link.style"
                @click.native="$emit('close')">
                {{ link.text }}
              </NuxtLink>
            </div>
          </div>

          <!-- CONTACT -->
          <div class="pt-4 overflow-hidden">
            <NuxtLink
              class="link navigation-appear-up transition"
              :style="{transitionDelay: `${links.length * 0.03 + 0.06}s`}"
              :to="localePath('contact')"
              @click.native="$emit('close')">
              {{ $t('navigation.contact') }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="py-4 md:py-8 px-8 text-xs font-hairline container mx-auto navigation-appear transition long">
        <NuxtLink
          :to="switchLocalePath('fr')"
          class="opacity-50 transition long"
          :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'fr'}">
          Fr
        </NuxtLink>
        <span class="opacity-75">/</span>
        <NuxtLink
          :to="switchLocalePath('en')"
          class="opacity-50 transition long"
          :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'en'}">
          En
        </NuxtLink>
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
        info: 'informations'
      }),

      informations () {
        return this.localize(this.info)
      },

      links () {
        return [
          {
            to: this.localePath('production'),
            text: this.informations.production.title,
            active: this.informations.activePages.production
          },
          {
            to: this.localePath('events'),
            text: this.informations.event.title,
            active: this.informations.activePages.events
          },
          {
            to: this.localePath('management'),
            text: this.informations.management.title,
            active: this.informations.activePages.management
          },
          {
            to: this.localePath('charity'),
            text: this.informations.charity.title,
            active: this.informations.activePages.charity
          }
        ]
          .filter(link => link.active)
          .map((link, idx) => ({
            ...link,
            style: { transitionDelay: `${idx * 0.03 + 0.06}s` }
          }))
      }
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
  @apply flex justify-end items-center mt-2 opacity-50 transform translate-x-12 ;
}

.link:after {
  content: "";
  transition: .1s ease-in-out;
  @apply border-b border-white w-8 ml-4 flex-shrink-0;
}

.link:hover {
  @apply translate-x-4;
}

.nuxt-link-active.link {
  @apply opacity-100;
}

.nuxt-link-active.link {
  @apply translate-x-0;
}

.link:first-child {
  @apply mt-0;
}
</style>
