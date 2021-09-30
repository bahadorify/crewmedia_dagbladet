export function filterArticles(filters, articles) {
  let filteredList = [...articles]

  // Filter tags
  if (filters.tag !== 'Alt') {
    filteredList = filteredList.filter((article) => {
      if (article.tags) {
        return article.tags
          .map((t) => t.toLowerCase())
          .includes(filters.tag.toLowerCase())
      }
    })
  }
  return filteredList
}
