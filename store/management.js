import isEmpty from 'lodash/isEmpty'

const initialState = () => ({
  item: {}
})

export const state = initialState

export const getters = {}

export const mutations = {
  setItem (state, value) {
    state.item = value
  }
}

export const actions = {
  fetch ({ state, commit }) {
    if (!isEmpty(state.item)) return

    return this.app.$sanity.fetch(fetchQuery)
      .then(res => {
        commit('setItem', res)
      })
  }
}

const fetchQuery = `
*[_id == 'managementPage'][0]
`
