import groq from 'groq'

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
  setItems (state, { item, value }) {
    state.informations[item] = value
  },

  setMenuColor (state, value) {
    state.menuColor = value
  }
}

export const actions = {
  async nuxtServerInit ({ commit, state }) {
    const query = groq`{
      'sharing': *[_type == 'sharing'][0],
      'activePages': *[_id == 'configActivePages'][0],
      'socials': *[_type == 'socials'][0],
      'contact': *[_id == 'config-contact'][0]{
        ...,
        informationsItems[] {
          "file": file.asset->url,
          text
        }
      }
    }`

    const { sharing, activePages, socials, contact } = await this.app.$sanity.fetch(query)
    commit('setItems', { item: 'sharing', value: sharing.sharing })
    commit('setItems', { item: 'activePages', value: activePages })
    commit('setItems', { item: 'socials', value: socials })
    commit('setItems', { item: 'contact', value: contact })
    console.log(state)
  }
}
