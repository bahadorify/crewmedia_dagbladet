export function paginateArticles(pagination, articles) {
  let paginatedList = [...articles]
  const { page, perPage } = pagination

  // Paginate
  const numPages = Math.ceil(paginatedList.length / perPage)
  const currentPage = page > numPages ? 1 : page
  const start = (currentPage - 1) * perPage
  const end = currentPage * perPage
  paginatedList = paginatedList.slice(start, end)

  const newPagination = {
    perPage,
    numPages,
    page: currentPage,
  }
  return { paginatedList, newPagination }
}
