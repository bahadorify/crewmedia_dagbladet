<template>
  <div class="articles-wrapper">
    <articles-grid :articles="heroArticles" />
    <articles-body />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `Siste Artikler | %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Les siste artikler.`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `artikler, siste artikler, forbrukslån`,
        },
      ],
    }
  },
  data() {
    return {
      heroArticles: [],
    }
  },
  async asyncData({ $content, store, route, error, redirect }) {
    try {
      //fetch heroArticles
      const heroArticles = await $content('posts')
        .where({ recommended: true })
        .sortBy('createdAt', 'desc')
        .limit(5)
        .fetch()
      const allArticles = await $content('posts')
        .where({ recommended: true })
        .sortBy('createdAt', 'desc')
        .fetch()
      if (!heroArticles.length || !allArticles.length) {
        redirect(`/`)
      }
      await store.dispatch('articles/setInitialArticles', allArticles)
      // fetch banks
      const bankArr = await $content('loan-providers')
        .sortBy('rank')
        .limit(3)
        .fetch()
      if (!bankArr.length) {
        throw new Error('Problem fetching banks!')
      }
      await store.dispatch('banks/setInitialBanks', bankArr)

      return {
        heroArticles,
      }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'Articles not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.articles-wrapper {
  padding-top: 40px;
}
@media screen and (max-width: $bp-mobile) {
  .articles-wrapper {
    padding-top: 10px;
  }
}
</style>
