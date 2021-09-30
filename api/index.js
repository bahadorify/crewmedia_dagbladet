const app = require('express')()

app.get('/test/empty', (req, res) => {
  res.send('')
})

module.exports = {
  path: '/',
  handler: app,
}

// export default (req, res, next) => {
//   // detect urls you'd like to redirect
//   // call res.redirect(CODE, NEWURL)
//   // return if it's a match, don't run next()!
//   if(req.path == '/forbrukslan/refinansiering-av-gjeld') {
//     console.log("traff jo")
//     res.redirect(301, '/refinansiering/')
//     console.log("gay !")
//     return
//   }

//   next()
// }

// module.exports = function (req, res, next) {
//   const ref = req.headers.referer
//   const isBadRef = ref ? ref.match(/staging-cmdb\.netlify\.app/i) : null
//   const isBadRef1 = ref ? ref.match(/localhost:3000/i) : null

//   if (isBadRef || isBadRef1) {
//     console.log('-----')
//     console.log('no')
//     res.end()
//   } else {
//     console.log('yes')
//     next()
//   }
// }
