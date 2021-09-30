<template>
  <div class="quote">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.quote {
  margin: 48px 87px 46px 65px;
  font-size: 22px;
  line-height: 36px;
  color: $bRed;
  font-style: italic;
  font-weight: 400;
  font-family: $font-family-lato;
  position: relative;
  &::before {
    position: absolute;
    content: $lightBulbPath;
    left: -65px;
  }
}
@media screen and (max-width: $bp-mobile) {
  .quote {
    margin-right: 0;
  }
}
</style>
