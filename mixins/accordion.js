export default {
  props: ['open'],
  data() {
    return {
      openClass: this.open ? 'open' : '',
      accordHeight: 0,
      accordStyle: {},
    }
  },
  mounted() {
    this.accordHeight = this.$refs.accord.clientHeight
    this.accordStyle = this.open
      ? {
          height: this.accordHeight + 'px',
        }
      : {
          height: 0,
        }
  },
  methods: {
    toggleOpen() {
      if (this.openClass) {
        this.openClass = ''
        this.accordStyle = {
          height: 0,
        }
      } else {
        this.openClass = 'open'
        this.accordStyle = {
          height: this.accordHeight + 'px',
        }
      }
    },
  },
}
