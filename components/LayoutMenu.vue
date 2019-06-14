<template>
  <transition name="menu">
    <nav class="fixed inset-0 bg-black overflow-scroll">
      <div class="container mx-auto mt-24 md:mt-32 flex justify-between p-8">
        <base-socials/>

        <!-- CONTACT -->
        <div class="hidden lg:flex self-end opacity-50">
          <div class="pr-8 border-r border-white flex flex-col justify-between">
            <h3 class="uppercase text-xs font-bold tracking-wider">Notre adresse</h3>
            <address class="">
              <div>rue du xxx</div>
              <div>1040 etterbeek</div>
              <div>Belgique</div>
            </address>
          </div>

          <div class="ml-8 ">
            <h3 class="uppercase text-xs font-bold tracking-wider">Tel</h3>
            <div>+32 89 XXXXXXX</div>
            <h3 class="mt-8 uppercase text-xs font-bold tracking-wider">Email</h3>
            <div>contact@thelouisecompany.com</div>
          </div>
        </div>

        <div class="font-serif text-right tracking-menu text-3xl w-full sm:w-menu">
          <!-- HOME -->
          <div class="border-b border-white pb-4">
            <nuxt-link
              class="link"
              :to="localePath('index')"
              exact
            >
              Accueil
            </nuxt-link>
          </div>

          <!-- WORK -->
          <div class="border-b border-white pb-8">
            <div class="uppercase text-xs font-sans mt-4 tracking-widest">Work</div>
            <nuxt-link
              class="link"
              :to="localePath('production')"
            >
              Production
            </nuxt-link>
            <nuxt-link
              class="link"
              :to="localePath('events')"
            >
              Events
            </nuxt-link>
            <nuxt-link
              class="link"
              :to="localePath('influencers')"
            >
              Influencers
            </nuxt-link>
            <nuxt-link
              class="link"
              :to="localePath('charity')"
            >
              Charity
            </nuxt-link>
          </div>

          <!-- CONTACT -->
          <div class="pt-4">
            <nuxt-link
              class="link"
              :to="localePath('contact')"
            >
              Contact
            </nuxt-link>
          </div>
        </div>
      </div>

      <div class="py-4 md:py-8 px-8 text-xs font-hairline container mx-auto">
        <nuxt-link
          :to="switchLocalePath('fr')"
          class="opacity-50 transition"
          :class="{'font-bold opacity-100 uppercase': $i18n.locale === 'fr'}"
        >
          Fr
        </nuxt-link>
        <span class="opacity-75">/</span>
        <nuxt-link
          :to="switchLocalePath('en')"
          class="opacity-50 transition"
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

  export default {
    components: {
      BaseSocials
    }
  }
</script>

<style scoped>
.menu-enter-active, .menu-leave-active {
  transition: all .5s ease-in-out;
}

.menu-enter, .menu-leave-to {
  opacity: 0;
  transform: scale(0);
}

/* .nuxt-link-active {
  @apply flex justify-between items-center;
}

.nuxt-link-active:after {
  content: "";
  @apply border-b border-white w-full ml-4;
} */

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
