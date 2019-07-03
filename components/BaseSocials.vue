<template>
  <div>
    <div class="flex flex-col items-center self-stretch">
      <a
        v-for="(item, i) in socials.items"
        :key="i"
        class="w-6 h-6 p-1 border rounded-full flex items-center justify-center my-2"
        :class="computeBorderColor"
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
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      color: {
        type: String,
        default: 'black'
      }
    },
    computed: {
      ...mapState({
        socials: state => state.informations.socials
      }),

      computeBorderColor () {
        if (this.color === 'black') return 'border-black'
        return 'border-white'
      }
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
