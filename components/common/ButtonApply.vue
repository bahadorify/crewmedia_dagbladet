<template>
  <div class="sok">
    <a :href="affiliate" class="btn-red btn-flex btn-sok">
      <span>Søk nå</span>
      <img :src="`${base}/icons/arrowR.svg`" alt="arrow-right" />
    </a>
  </div>
</template>

<script>
export default {
  props: ['affiliate'],
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
.btn-sok {
  span {
    margin-right: 30px;
    color: white;
  }
  &:hover {
    img {
      transform: translateX(10px);
    }
  }
}
</style>
