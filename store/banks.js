export const state = () => ({
  banks: [],
})

export const getters = {
  getBanks(state) {
    return state.banks
  },
}

export const mutations = {
  setBanks(state, banks) {
    state.banks = banks
  },
}

export const actions = {
  async setInitialBanks({ commit }, banks) {
    await commit('setBanks', banks)
  },
}
