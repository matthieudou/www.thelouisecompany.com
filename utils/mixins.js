export const sectionColor = {
  created () {
    if (process.client) {
      const sections = document.querySelectorAll('[data-section-color]')
      this.$store.commit('setColorSections', sections)
    }
  }
}
