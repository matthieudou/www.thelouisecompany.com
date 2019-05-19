const initialState = () => ({
  title: '',
  image: {},
  items: []
})

export const state = initialState

export const getters = {

}

export const mutations = {
  setItems (state, { title, image, productionItems }) {
    state.title = title
    state.image = image
    state.items = productionItems
  }
}

export const actions = {
  fetch ({ state, commit }) {
    if (state.items.length > 0) return

    return this.app.$sanity.fetch(fetchQuery)
      .then(res => {
        commit('setItems', res)
      })
  }
}

const fetchQuery = `
  *[_type == 'productionPage'] {
    title,
    image,
    productionItems[]->
  }[0]
`
