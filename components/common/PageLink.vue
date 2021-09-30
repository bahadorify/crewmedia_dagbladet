<template>
  <a :href="`${link}`">
    <div class="page-link" @mouseenter="mouseIn()" @mouseleave="mouseOut()">
      <img class="arrow-ur" :src="`${base}/icons/${arrow}.svg`" />
      <img class="link-img" :src="`${base}/${linkImg}`" alt="" />
      <div class="text">{{ text }}</div>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    linkImg: {
      type: String,
      default: 'icons/link-img/forbrukslan.svg',
    },
    text: {
      type: String,
      default: 'Lån med betalingsanmerkning',
    },
  },
  data() {
    return {
      base: process.env.baseUrl,
      arrow: 'arrowUR',
    }
  },
  methods: {
    mouseIn() {
      this.arrow = 'redArrowUR'
    },
    mouseOut() {
      this.arrow = 'arrowUR'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.page-link {
  height: 120px;
  width: 162px;
  margin: 5px 0;
  position: relative;
  border: 1px solid $bGrey;
  box-sizing: border-box;
  border-radius: 5px;
  transition: all 0.2s ease;
  & > * {
    position: absolute;
  }
  &:hover {
    background-color: $bGrey;
    box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.06);
    .arrow-ur {
      top: 10px;
      right: 10px;
    }
    .text {
      color: $bRed;
    }
  }
}
.arrow-ur {
  top: 15px;
  right: 15px;
  transition: all 0.2s ease;
}
.link-img {
  top: 8px;
  left: 8px;
}
.text {
  top: 64px;
  left: 0;
  width: 162px;
  padding: 0 14px;
  font-size: 14px;
  line-height: 20px;
  color: $textSecondary;
}
</style>
