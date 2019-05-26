const initialState = () => ({
  informations: {
    sharing: {}
  }
})

export const state = initialState

export const getters = {}

export const mutations = {
  setSharingInformations (state, value) {
    state.informations.sharing = value
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    await Promise.all([
      this.app.$sanity.fetch(sharingQuery)
        .then(res => {
          commit('setSharingInformations', res.sharing)
        })
    ])
  }
}

const sharingQuery = `
  *[_type == 'sharing'][0]
`
