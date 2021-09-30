<template>
  <div class="full-width articles-body">
    <div class="container container-flex">
      <section class="main">
        <articles-list />
      </section>
      <section class="side">
        <recommended-banks />
        <recommended-pages />
      </section>
    </div>
  </div>
</template>

<script>
import RecommendedBanks from '../bankside/RecommendedBanks.vue'
import RecommendedPages from '../sections/RecommendedPages.vue'
import ArticlesList from './ArticlesList.vue'
export default {
  components: { ArticlesList, RecommendedBanks, RecommendedPages },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.articles-body {
  padding: 50px 0;
}
@media screen and (max-width: $bp-mobile) {
  .side {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
