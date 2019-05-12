const initialState = () => ({
  title: '',
  items: []
})

export const state = initialState

export const getters = {

}

export const mutations = {
  setItems (state, { title, productionItems }) {
    state.items = productionItems
  }
}

export const actions = {
  fetch ({ commit }) {
    return this.app.$sanity.fetch(fetchQuery)
      .then(res => {
        commit('setItems', res)
        console.log(res)
      })
  }
}

const fetchQuery = `
*[_type == 'productionPage'] {
  productionItems[]->
}[0]
`
