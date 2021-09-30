export default {
  data() {
    return {
      scrollPixels: 0,
    }
  },
  methods: {
    getScrollPixels(value) {
      this.scrollPixels =
        document.getElementById(value).getBoundingClientRect().y +
        window.scrollY -
        120
    },
  },
}
