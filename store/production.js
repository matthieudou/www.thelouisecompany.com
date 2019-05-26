const initialState = () => ({
  title: '',
  image: {},
  items: [],
  meta: {}
})

export const state = initialState

export const getters = {

}

export const mutations = {
  setItems (state, { title, image, productionItems, meta }) {
    state.title = title
    state.image = image
    state.meta = meta
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
    meta,
    productionItems[]->
  }[0]
`
