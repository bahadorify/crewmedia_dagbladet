<template>
  <div class="accordion-wrapper">
    <div class="container">
      <h2 v-if="title">{{ title }}</h2>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.accordion-wrapper {
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.06);
  background: white;
  .container {
    padding: 0;
  }
  h2 {
    padding: 24px 0 0 25px;
  }
}
</style>
