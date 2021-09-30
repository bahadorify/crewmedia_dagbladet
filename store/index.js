import axios from 'axios'

export const actions = {
  async nuxtServerInit({ commit }, { store }) {
    const hRes = await axios.get(
      `https://www.dagbladet.no/app/esi-components/headers/dagbladet-header`
    )
    commit('header/update', hRes.data)
  },
}
