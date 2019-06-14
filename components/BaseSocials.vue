<template>
  <div class="hidden sm:flex flex-col items-center self-stretch">
    <a
      v-for="(item, i) in socials.items"
      :key="i"
      class="w-6 h-6 p-1 border border-white rounded-full flex items-center justify-center my-2"
      :title="item.name"
      :href="item.link"
    >
      <icon
        class="w-full h-full"
        :name="item.name"
      />
    </a>
    <div class="relative">
      <div class="rotated top-0 absolute text-xs pr-6">{{ localize(socials.catchPhrase) }}</div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        socials: state => state.informations.socials
      })
    }
  }
</script>

<style scoped>
.rotated {
  transform-origin: top left;
  transform: rotate(-90deg) translateX(-100%) translateY(-50%);
  white-space: nowrap;
}
</style>
