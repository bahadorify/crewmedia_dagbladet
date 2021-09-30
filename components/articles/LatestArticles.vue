<template>
  <div class="latest-articles">
    <div class="title">Siste publiserte artikler</div>
    <featured-article-3
      v-for="(article, idx) in articles"
      :key="idx"
      :article="article"
    />
  </div>
</template>

<script>
export default {
  props: ['articles'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.latest-articles {
  margin-bottom: 35px;
}
.title {
  font-size: 18px;
  color: $textPrimary;
  line-height: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}
</style>
