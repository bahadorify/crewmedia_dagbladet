<template>
  <a :href="`${base}/${getUrl()}`">
    <div
      class="featured-wrapper"
      @mouseenter="mouseIn()"
      @mouseleave="mouseOut()"
    >
      <div class="img">
        <img :src="getImg" :alt="article.title" />
      </div>
      <div class="text">
        <div class="title">{{ getAbrigedName({ maxLength: 40 }) }}</div>
        <div class="tag-wrapper">
          <div
            v-if="article.article_tags && article.article_tags.length"
            class="tag"
          >
            {{ article.article_tags[0] }}
          </div>
          <div v-else></div>
          <img
            :src="`${base}/icons/${arrow}.svg`"
            alt="right arrow"
            class="arrow"
          />
        </div>
      </div>
    </div>
  </a>
</template>

<script>
import Article from '~/mixins/article.js'

export default {
  props: ['article'],
  mixins: [Article],
  data() {
    return {
      base: process.env.baseUrl,
      gradient: 'linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5))',
      arrow: 'greenArrowRsquare',
    }
  },
  computed: {},
  methods: {
    mouseIn() {
      this.arrow = 'redArrowRsquare'
    },
    mouseOut() {
      this.arrow = 'greenArrowRsquare'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
a {
  &:hover {
    text-decoration: none;
  }
}
.featured-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  height: 100px;
  border-radius: 5px;
  background-color: $bMidGrey;
  transition: all 0.2s ease;
  &:hover {
    background-color: $bGrey;
    box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.06);
    .arrow {
      transform: translateX(10px);
    }
    .img img {
      opacity: 1;
    }
  }
  .img {
    width: 37%;
    height: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      transition: all 0.2s ease;
      opacity: 0.8;
    }
  }
  .text {
    width: 63%;
    padding: 10px 12px 0 16px;
    display: flex;
    flex-direction: column;
    .title {
      color: $textPrimary;
      font-size: 14px;
      line-height: 20px;
    }
    .tag-wrapper {
      display: flex;
      justify-content: space-between;
      margin-top: 8px;
      .tag {
        height: 27px;
        background-color: $bLightRed;
        color: $bRed;
        font-size: 12px;
        padding: 8px 12px;
        border-radius: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        // cursor: pointer;
      }
      .arrow {
        transition: all 0.2s ease;
      }
    }
  }
}
</style>
