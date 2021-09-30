<template>
  <a :href="`${link}`">
    <div class="page-link" @mouseenter="mouseIn()" @mouseleave="mouseOut()">
      <img class="link-img" :src="`${base}/${linkImg}`" alt="" />
      <div class="bottom">
        <div class="text">{{ text }}</div>
        <img class="arrow-r" :src="`${base}/icons/${arrow}.svg`" />
      </div>
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
      arrow: 'greenArrowR',
    }
  },
  methods: {
    mouseIn() {
      this.arrow = 'redArrowR'
    },
    mouseOut() {
      this.arrow = 'greenArrowR'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
a:hover {
  text-decoration: none;
}
.page-link {
  height: 180px;
  width: 220px;
  margin: 5px 0;
  padding-top: 38px;
  position: relative;
  box-sizing: border-box;
  transition: all 0.2s ease;
  background: white;
  box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.06);
  border-radius: 10px;
  &:hover {
    background-color: $bGrey;
    box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.06);
    .arrow-r {
      transform: translateX(10px);
    }
    .text {
      color: $bRed;
    }
  }
}
.bottom {
  display: flex;
  align-items: center;
}
.arrow-r {
  transition: all 0.2s ease;
}
.link-img {
  margin: 0px auto 24px;
  height: 60px;
}
.text {
  width: 185px;
  padding: 0 14px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: $textSecondary;
}
</style>
