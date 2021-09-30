export default {
  mounted() {
    this.initDropdown('commercial-dropdown')
  },
  methods: {
    initDropdown(id) {
      const element = document.getElementById(id)
      element.addEventListener('click', toggleVanillaClick.bind(element))

      element.parentElement.addEventListener('focusin', function () {
        element.dataset.lastFocusTime = Date.now()
      })

      element.parentElement.addEventListener('focusout', function () {
        return
        const delay = 300 // milliseconds;
        setTimeout(function () {
          Date.now() - parseInt(element.dataset.lastFocusTime) > delay &&
            element.classList.remove('toggled')
        }, delay)
      })
    },
  },
}
