<template>
  <a :href="`${base}/${getUrl()}`">
    <div class="wrapper">
      <div
        class="article"
        :style="{
          backgroundImage: `${gradient}, url(${getImg})`,
        }"
      >
        <div class="overlay"></div>
        <div class="article-info">
          <div v-if="article.tags && article.tags[0]" class="tags">
            <span class="tag" v-for="(tag, idx) in article.tags" :key="idx">{{
              tag
            }}</span>
          </div>
        </div>
      </div>
      <div class="article-extra">
        <div v-if="hasExtra" class="extra-info">
          <span class="author">{{ article.author }}</span>
          <span class="dot">|</span>
          <span class="date">{{ getDate }}</span>
        </div>
        <div class="title">
          {{ article.h1 }}
        </div>
        <div class="subtitle">
          {{ article.h2 }}
        </div>
      </div>
    </div>
  </a>
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
  computed: {},
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
a:hover {
  transition: all 0.2s;
  text-decoration: none;
  .overlay {
    opacity: 0;
  }
  .article-extra {
    opacity: 0.8;
  }
}

.article {
  width: 100%;
  height: 208px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: all 0.2s;
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
.tag {
  padding: 0.4em 0.5em;
  border: 1px solid white;
  border-radius: 1em;
  font-size: 0.6em;
}
.article-extra {
  font-size: 20px;
  margin-top: 10px;
  transition: all 0.2s;
  .extra-info {
    transition: all 0.2s;
    font-size: 0.7em;
    color: $textTertiary;
  }
  .title {
    transition: all 0.2s;
    font-size: 0.9em;
    font-weight: 700;
    color: $textPrimary;
  }
  .subtitle {
    transition: all 0.2s;
    font-size: 0.7em;
    color: $textSecondary;
  }
}
</style>
