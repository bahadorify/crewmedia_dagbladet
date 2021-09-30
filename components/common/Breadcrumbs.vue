<template>
  <div class="breadcrumbs">
    <a :href="`${base}/`">Hjem</a>
    <span v-for="(p, idx) of path" :key="idx" class="path">
      <span class="arrow-right">></span>
      <a :href="p.url">{{ p.name }}</a>
    </span>
  </div>
</template>

<script>
export default {
  props: ['path'],
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.breadcrumbs {
  color: $textTertiary;
  font-size: 14px;
  a {
    color: $textTertiary;
    &:hover {
      color: $bRed;
    }
  }
  .path:last-child {
    a {
      color: $bRed;
    }
  }
  span.arrow-right {
    margin: 0 10px;
  }
}
@media screen and (max-width: $bp-mobile) {
  .breadcrumbs {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
