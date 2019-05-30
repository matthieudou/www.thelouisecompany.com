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
  setItems (state, value) {
    Object.assign(state, {
      title: value.title,
      image: value.image,
      meta: value.meta,
      items: value.productionItems
    })
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
    productionItems
  }[0]
`
