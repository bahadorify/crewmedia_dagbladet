<template>
  <div class="wrapper">
    <div class="title" ref="articles-list">Personlig økonomi</div>
    <tags />
    <div class="articles-list">
      <featured-article-2
        v-for="(art, idx) of articles"
        :article="art"
        :key="idx"
        class="article2"
        :hasExtra="true"
      />
    </div>
    <pagination @scrollUp="getScrollPixels" :scrollPixels="scrollPixels" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from '../common/Pagination.vue'
import Tags from '../common/Tags.vue'
import FeaturedArticle2 from './FeaturedArticle2.vue'
export default {
  components: { FeaturedArticle2, Pagination, Tags },
  data() {
    return {
      scrollPixels: 0,
    }
  },
  computed: {
    ...mapGetters({
      articles: 'articles/getPaginatedArticles',
    }),
  },
  methods: {
    getScrollPixels() {
      this.scrollPixels =
        this.$refs['articles-list'].getBoundingClientRect().y +
        window.scrollY -
        120
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.title {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  margin-bottom: 20px;
}
.articles-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-items: stretch;
}
.article2 {
  flex: 1 0 220px;
  margin-bottom: 30px;
  margin-right: 18px;
}
@media screen and (max-width: $bp-mobile) {
  .title {
    text-align: center;
  }
  .articles-list {
    flex-direction: column;
  }
  .article2 {
    margin-right: 0;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
