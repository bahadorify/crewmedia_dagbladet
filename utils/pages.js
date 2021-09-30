export async function getData(pagePath, content) {
  const fullPagePath = '/pages/' + pagePath
  const pageArr = await content('pages')
    .where({ path: { $eq: fullPagePath } })
    .fetch()
  const page = pageArr[0]
  const {
    title,
    description,
    keywords,
    affiliate,
    schema,
    category,
    h1,
    h2,
    short_text,
    read_more,
    updatedAt,
  } = page
  // extract the script in schema
  let schemaScript = ''
  if (schema) {
    const regex = /{(.|\n)*}/
    schemaScript = schema.match(regex)[0]
  }
  // fetch latest articles
  const latestArticles = await content('posts')
    .where({ recommended: true })
    .sortBy('createdAt', 'desc')
    .limit(4)
    .fetch()
  // fetch Comparison
  const bankArr = await content('loan-providers')
    .where({
      pages_to_show: {
        $contains: category,
      },
    })
    .sortBy('rank')
    .fetch()
  const headerInfo = {
    h1,
    h2,
    updatedAt,
    short_text,
    read_more,
  }
  return {
    page,
    latestArticles,
    title,
    description,
    keywords,
    affiliate,
    schemaScript,
    category,
    bankArr,
    headerInfo,
  }
}
