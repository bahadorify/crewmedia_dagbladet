<template>
  <div v-html="header"></div>
</template>

<script>
import axios from 'axios'
import DBMenu from '~/mixins/dbMenu.js'

export default {
  mixins: [DBMenu],
  computed: {
    header() {
      return this.$store.state.header.html
    },
  },
}
</script>
