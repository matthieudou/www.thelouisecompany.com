import groq from 'groq'

const initialState = () => ({
  menuColor: 'text-white',
  informations: {
    sharing: {},
    socials: {},
    activePages: {},
    contact: {},
    charity: {},
    event: {},
    management: {},
    production: {}
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
      },
      "charity": *[_id == 'charityPage'][0] { title },
      "event": *[_id == 'eventPage'][0] { title },
      "management": *[_id == 'managementPage'][0] { title },
      "production": *[_id == 'productionPage'][0] { title },
    }`

    const { sharing, activePages, socials, contact, charity, event, management, production } = await this.app.$sanity.fetch(query)
    commit('setItems', { item: 'sharing', value: sharing.sharing })
    commit('setItems', { item: 'activePages', value: activePages })
    commit('setItems', { item: 'socials', value: socials })
    commit('setItems', { item: 'contact', value: contact })
    commit('setItems', { item: 'charity', value: charity })
    commit('setItems', { item: 'event', value: event })
    commit('setItems', { item: 'management', value: management })
    commit('setItems', { item: 'production', value: production })
  }
}
