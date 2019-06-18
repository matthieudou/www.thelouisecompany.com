const initialState = () => ({
  dataIsFetched: false,
  hero: {},
  services: {}
})

export const state = initialState

export const getters = {

}

export const mutations = {
  setFetched (state) {
    state.dataIsFetched = true
  },

  setItem (state, { item, value }) {
    Object.assign(state[item], value)
  }
}

export const actions = {
  async fetch ({ state, commit }) {
    if (state.dataIsFetched) return

    await Promise.all([
      this.app.$sanity.fetch(fetchQuery)
        .then(res => {
          commit('setItem', { item: 'hero', value: res })
        }),
      this.app.$sanity.fetch(fetchServices)
        .then(res => {
          commit('setItem', { item: 'services', value: res })
        })
    ])
    commit('setFetched')
  }
}

const fetchQuery = `
*[_type == 'homeHero'][0]
`

const fetchServices = `
*[_type == 'homeServices'][0]
`
