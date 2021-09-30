<template>
  <div class="container articles-hero-wrapper">
    <breadcrumbs :path="breadPath" />
    <div class="latest-articles">
      <featured-article
        v-if="articles[0]"
        :article="articles[0]"
        :hasExtra="true"
        class="first"
      />
      <featured-article
        v-if="articles[1]"
        :article="articles[1]"
        class="second"
      />
      <featured-article
        v-if="articles[2]"
        :article="articles[2]"
        class="third"
      />
      <featured-article
        v-if="articles[3]"
        :article="articles[3]"
        class="forth"
      />
      <featured-article
        v-if="articles[4]"
        :article="articles[4]"
        class="fifth"
      />
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../common/Breadcrumbs.vue'
import FeaturedArticle from './FeaturedArticle.vue'
export default {
  components: { Breadcrumbs, FeaturedArticle },
  props: ['articles'],
  mounted() {
    console.log(this.articles)
  },
  data() {
    return {
      breadPath: [{ name: 'Artikler', url: process.env.baseUrl + '/artikler' }],
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.breadcrumbs {
  padding-bottom: 20px;
}
.latest-articles {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: minmax(160px, 1fr) minmax(160px, 1fr);
  grid-template-areas:
    'first second third'
    'first forth fifth';
  gap: 13px 7px; // row-gap column-gap
  place-items: stretch/stretch; // align-items justify-items
}

.first {
  grid-area: first;
}
.second {
  grid-area: second;
}
.third {
  grid-area: third;
}
.forth {
  grid-area: forth;
}
.fifth {
  grid-area: fifth;
}

@media screen and (max-width: $bp-mobile) {
  .latest-articles {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: minmax(160px, 1fr) minmax(160px, 1fr) minmax(160px, 1fr);
    grid-template-areas:
      'first first'
      'second third'
      'forth fifth';
  }
}
</style>
