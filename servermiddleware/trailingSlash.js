require('dotenv').config()

module.exports = function (req, res, next) {
  const matched = req.url.match(/\/(.+)\/$/)
  //   console.log('matched', matched)
  if (matched) {
    console.log('matched', matched)
    console.log(`redirect: ${matched[1]}/ => ${matched[1]}`)
    res.writeHead(301, { Location: `/${process.env.BASE}/${matched[1]}` })
    res.end()
  } else {
    next()
  }
}
