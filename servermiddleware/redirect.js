require('dotenv').config()
const BASE = process.env.BASE
const cleanLinks = require(`../content/${BASE}/redirects/clean-links.json`)
const internalRedirects = require(`../content/${BASE}/redirects/internal-redirects.json`)

module.exports = function (req, res, next) {
  const baseUrl = '/' + BASE
  const internal = internalRedirects.redirects.find((r) => r.from === req.url)
  const clean = cleanLinks.redirects.find((r) => r.from === req.url)

  if (internal) {
    const re = /^(\/[^\/]*)(.*)/
    const { to, from } = internal
    const toMatched = to.match(re)

    const [full, base, path] = toMatched ? toMatched : []
    console.log('internal', internal)
    console.log('base + path', base + path)
    console.log('baseUrl + from', baseUrl + from)

    if (!base || base + path === baseUrl + from) {
      console.log('NOPE! not redirecting')
      next()
      return
    }

    console.log(`redirect: ${baseUrl}${from} => ${to}`)
    res.writeHead(301, { Location: to })
    res.end()
  } else if (clean) {
    console.log(`redirect: ${clean.from} => ${clean.to}`)
    res.writeHead(301, { Location: clean.to })
    res.end()
  } else {
    next()
  }
}
