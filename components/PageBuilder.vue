<template>
  <div>
    <Linkhub v-if="baseUrl === '/lan'"></Linkhub>
    <Comparison
      v-else-if="bankArray.length"
      :headerInfo="headerInfo"
      :bankArray="bankArray"
    ></Comparison>
    <div
      class="wrapper full-width"
      :style="{
        background: options.background,
        paddingTop: options.paddingTop,
      }"
    >
      <div class="container container-flex">
        <div class="main">
          <nuxt-content :document="page" class="content" />
        </div>
        <div class="side">
          <toc
            v-if="options.toc && page.toc.length"
            :tocList="page.toc"
            @scrollHeading="getScrollPixels"
            :scrollPixels="scrollPixels"
          />
          <latest-articles v-if="options.latestArticles" :articles="articles" />
          <recommended-pages v-if="options.recommendedPages" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TOC from '~/mixins/toc.js'
import BaseURL from '~/mixins/baseUrl.js'

export default {
  mixins: [TOC, BaseURL],
  props: {
    headerInfo: Object,
    bankArray: Array,
    articles: Array,
    page: Object,
    options: {
      type: Object,
      default() {
        return {
          latestArticles: true,
          recommendedPages: true,
          background: 'white',
        }
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 20px;
}
.side {
  padding-top: 29px;
}
</style>
