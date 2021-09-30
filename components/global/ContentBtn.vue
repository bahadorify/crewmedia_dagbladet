<template>
  <a :href="url" target="_blank">{{ text }}</a>
</template>

<script>
export default {
  props: {
    text: String,
    url: String,
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

a {
  display: inline-block;
  background: $red;
  color: white;
  font-weight: bold;
  padding: 1rem 3rem;
  margin: 2rem 0.2rem 0;
  border-radius: 5px;
  &:hover {
    text-decoration: none;
    opacity: 0.7;
    transition: 0.2s;
  }
}
</style>
