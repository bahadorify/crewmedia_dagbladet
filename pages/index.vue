<template>
  <page-builder
    :headerInfo="headerInfo"
    :bankArray="bankArr"
    :articles="latestArticles"
    :page="page"
    :options="{
      toc: true,
      latestArticles: true,
      recommendedPages: true,
      background: 'white',
    }"
  />
</template>

<script>
import PBuilder from '~/mixins/pageBuilder.js'
import { getData } from '~/utils/pages.js'

export default {
  mixins: [PBuilder],
  async asyncData({ $content }) {
    return await getData(process.env.BASE, $content)
  },
}
</script>

<style lang="scss" scoped></style>
