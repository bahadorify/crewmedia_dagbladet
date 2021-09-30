export default {
  data() {
    return {
      baseUrl: process.env.baseUrl,
    }
  },
  methods: {
    getUrl(path) {
      if (path.substr(0, 4) === 'http') return path
      if (path[0] === '/') return `${this.baseUrl}${path}`
      return `${this.baseUrl}/${path}`
    },
  },
}
