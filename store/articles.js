import * as Filters from '~/utils/filters'
import * as Pagination from '~/utils/pagination'

export const state = () => ({
  articles: [],
  filteredArticles: [],
  paginatedArticles: [],
  filters: {
    tags: [
      'Lån',
      'Gjeld',
      'Investering',
      'Konkurs',
      'Pensjon',
      'Kreditt',
      'Alt',
    ],
    tag: 'Alt',
  },
  pagination: {
    perPage: 6, // items per page
    numPages: 1, // total number of pages
    page: 1,
  },
})

export const getters = {
  getArticles(state) {
    return state.articles
  },
  getFilteredArticles(state) {
    return state.filteredArticles
  },
  getFilters(state) {
    return state.filters
  },
  getPaginatedArticles(state) {
    return state.paginatedArticles
  },
  getPagination(state) {
    return state.pagination
  },
}

export const mutations = {
  setArticles(state, articles) {
    state.articles = articles
  },
  setFilteredArticles(state, articles) {
    state.filteredArticles = articles
  },
  setFilterTag(state, tag) {
    state.filters.tag = tag
  },
  setNumPages(state, number) {
    state.pagination.numPages = number
  },
  setPage(state, page) {
    state.pagination.page = page
  },
  filterArticles(state) {
    const articles = [...state.articles]
    state.filteredArticles = Filters.filterArticles(state.filters, articles)
  },
  paginateArticles(state) {
    const articles = [...state.filteredArticles]
    const { paginatedList, newPagination } = Pagination.paginateArticles(
      state.pagination,
      articles
    )
    state.paginatedArticles = paginatedList
    state.pagination = newPagination
  },
}

export const actions = {
  async setInitialArticles({ commit }, articles) {
    await commit('setArticles', articles)
    await commit('filterArticles')
    await commit('paginateArticles')
  },
  async paginateArticles({ commit }, page) {
    await commit('setPage', page)
    await commit('paginateArticles')
  },
  async filterArticles({ commit }, tag) {
    await commit('setFilterTag', tag)
    await commit('filterArticles')
    await commit('paginateArticles')
  },
}
