<template>
  <div
    class="article"
    :style="{
      backgroundImage: `${gradient}, url(${getImg})`,
    }"
  >
    <a :href="`${base}/${getUrl()}`">
      <div class="overlay"></div>
      <div class="article-info">
        <div v-if="article.tags && article.tags[0]" class="tags">
          <span class="tag" v-for="(tag, idx) in article.tags" :key="idx">{{
            tag
          }}</span>
        </div>
        <div v-if="hasExtra" class="extra-info">
          <span class="author">{{ article.author }}</span>
          <span class="dot">|</span>
          <span class="date">{{ getDate }}</span>
        </div>
        <div class="title">
          {{ article.title }}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import Article from '~/mixins/article.js'

export default {
  props: ['article', 'hasExtra'],
  mixins: [Article],
  data() {
    return {
      base: process.env.baseUrl,
      gradient: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
    }
  },
}
</script>

<style lang="scss" scoped>
.article {
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.2s;
  &:hover {
    .overlay {
      opacity: 0;
    }
  }
}
.overlay {
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 5px;
  opacity: 0.2;
  transition: all 0.2s;
}
.article-info {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 10px 10px 10px;
  color: white;
  font-size: 16px;
  line-height: 1.2em;
}
.first .article-info {
  font-size: 20px;
}
.tags {
  margin-bottom: 0.6em;
}
.tag {
  padding: 0.4em 0.5em;
  border: 1px solid white;
  border-radius: 1em;
  font-size: 0.6em;
}
.extra-info {
  font-size: 0.7em;
}
</style>
