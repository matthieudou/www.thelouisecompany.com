const initialState = () => ({
  colorSections: [],
  informations: {
    sharing: {},
    socials: {},
    activePages: {}
  }
})

export const state = initialState

export const getters = {}

export const mutations = {
  setSharingInformations (state, value) {
    state.informations.sharing = value
  },

  setItems (state, { item, value }) {
    state.informations[item] = value
  },

  setColorSections (state, value) {
    state.colorSections = value
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    await Promise.all([
      this.app.$sanity.fetch(sharingQuery)
        .then(res => {
          commit('setSharingInformations', res.sharing)
        }),
      this.app.$sanity.fetch(activePagesQuery)
        .then(res => {
          commit('setItems', { item: 'activePages', value: res })
        }),
      this.app.$sanity.fetch(socialsQuery)
        .then(res => {
          commit('setItems', { item: 'socials', value: res })
        })
    ])
  }
}

const sharingQuery = `
  *[_type == 'sharing'][0]
`

const socialsQuery = `
  *[_type == 'socials'][0] {
    catchPhrase,
    items
  }
`

const activePagesQuery = `
*[_id == 'configActivePages'][0]
`
