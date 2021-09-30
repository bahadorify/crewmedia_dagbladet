export default {
  data() {
    return { base: process.env.baseUrl }
  },
  computed: {
    getDate() {
      const dateStr = this.article.date
      const date = new Date(dateStr)
      const day = date.getDate()
      const month = date.getMonth()
      const year = date.getFullYear()
      const NorMonths = [
        'jan',
        'feb',
        'mar',
        'apr',
        'mai',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'des',
      ]
      return `${day}. ${NorMonths[month]} ${year}`
    },
    getImg() {
      const img = this.article.featured_image
      return img ? img : this.base + '/img/lane-penger.webp'
    },
  },
  methods: {
    getUrl(options = { entity: 'article', regex: 'posts' }) {
      const { entity, regex } = options
      const path = this[entity].path
      const reStr = `\/${regex}\/(.+)`
      const re = new RegExp(reStr)
      const matched = path.match(re)
      return matched ? matched[1] : '#'
    },
    getAbrigedName(options = { maxLength: 26 }) {
      let { h1 } = this.article
      let letterCount = 0
      let idx = 0
      let resultStr = ''
      const words = h1.split(' ')
      for (idx in words) {
        const length = letterCount + words[idx].length
        if (length <= options.maxLength) {
          letterCount = length
          resultStr += ' ' + words[idx]
        } else {
          resultStr += '...'
          break
        }
      }
      return resultStr
    },
  },
}
