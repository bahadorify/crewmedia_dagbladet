<template>
  <div class="toc">
    <div class="title">I denne artikkelen</div>
    <ul>
      <li
        v-for="link in filteredToc"
        :key="link.id"
        class="toc-item"
        :style="{
          marginLeft: (link.depth - 1) * 20 + 'px',
          fontSize: link.depth === 2 ? '14px' : '12px',
        }"
        @click="handleScroll(link.id)"
      >
        {{ link.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['tocList', 'scrollPixels'],
  computed: {
    filteredToc() {
      return this.tocList.filter((t) => t.text && t.id)
    },
  },
  methods: {
    handleScroll(link) {
      this.$emit('scrollHeading', link)
      this.$nextTick(() => {
        window.scrollTo({
          top: this.scrollPixels,
          behavior: 'smooth',
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.toc {
  margin-bottom: 35px;
  @media screen and (max-width: $bp-mobile) {
    display: none;
  }
}

.title {
  font-size: 18px;
  color: $textPrimary;
  line-height: 22px;
  font-weight: 700;
  margin-bottom: 20px;
}

li {
  font-size: 14px;
  font-family: $font-family-ssp;
  color: $textTertiary;
  position: relative;
  line-height: 21px;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    height: 5px;
    width: 5px;
    top: 10px;
    left: -20px;
    background-color: $textTertiary;
    border-radius: 50%;
    display: inline-block;
  }
  &:hover {
    color: $bRed;
    &::before {
      background-color: $bRed;
    }
  }
}
</style>
