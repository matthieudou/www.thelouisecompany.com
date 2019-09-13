const initialState = () => ({
  menuColor: 'text-white',
  informations: {
    sharing: {},
    socials: {},
    activePages: {},
    contact: {}
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

  setMenuColor (state, value) {
    state.menuColor = value
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
        }),
      this.app.$sanity.fetch(contact)
        .then(res => {
          commit('setItems', { item: 'contact', value: res })
        })
    ])
  }
}

const sharingQuery = `
  *[_type == 'sharing'][0]
`

const socialsQuery = `
  *[_type == 'socials'][0]
`

const activePagesQuery = `
  *[_id == 'configActivePages'][0]
`

const contact = `
  *[_id == 'config-contact'][0]{
    ...,
    informationsItems[] {
      "file": file.asset->url,
      text
    }
  }
`
