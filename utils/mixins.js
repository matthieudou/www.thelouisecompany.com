import { mapMutations } from 'vuex'

export const sectionColor = {
  data () {
    return {
      colorSections: []
    }
  },
  created () {
    if (process.client) {
      document.addEventListener('scroll', this.navigationScroll)
    }
  },

  beforeDestroy () {
    document.removeEventListener('scroll', this.navigationScroll)
  },

  methods: {
    ...mapMutations({
      setMenuColor: 'setMenuColor'
    }),

    initializeMixin () {
      this.computeSections()
      this.navigationScroll()
    },

    computeSections () {
      if (process.client) {
        this.colorSections = document.querySelectorAll('[data-section-color-classes]')
      }
    },

    navigationScroll () {
      this.colorSections.forEach(sect => {
        if (sect.offsetTop < window.pageYOffset + 32) {
          this.setMenuColor(sect.getAttribute('data-section-color-classes'))
        }
      })
    }
  }
}
