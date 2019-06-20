const initialState = () => ({
  dataIsFetched: false,
  hero: {},
  services: {},
  citation: {},
  clients: {},
  whoWeAre: {}
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
      this.app.$sanity.fetch(heroQuery)
        .then(res => {
          commit('setItem', { item: 'hero', value: res })
        }),
      this.app.$sanity.fetch(citationQuery)
        .then(res => {
          commit('setItem', { item: 'citation', value: res })
        }),
      this.app.$sanity.fetch(servicesQuery)
        .then(res => {
          commit('setItem', { item: 'services', value: res })
        }),
      this.app.$sanity.fetch(whoWeAreQuery)
        .then(res => {
          commit('setItem', { item: 'whoWeAre', value: res })
        }),
      this.app.$sanity.fetch(clientsQuery)
        .then(res => {
          commit('setItem', { item: 'clients', value: res })
        })
    ])
    commit('setFetched')
  }
}

const heroQuery = `
*[_type == 'homeHero'][0]
`

const citationQuery = `
*[_type == 'homeCitation'][0]
`

const servicesQuery = `
*[_type == 'homeServices'][0]
`

const clientsQuery = `
*[_type == 'homeClients'][0]
`

const whoWeAreQuery = `
*[_type == 'homeWhoWeAre'][0]
`
