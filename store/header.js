export const state = () => ({
  html: '',
})

export const mutations = {
  update(state, newHtml) {
    state.html = newHtml
  },
}
