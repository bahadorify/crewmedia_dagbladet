<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">
      {{ error.message || 'An error occured' }}
    </h1>
    <h1 v-else>{{ error.message || 'An error occured' }}</h1>
    <a :href="`${baseUrl}`">Home page</a>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'errorLayout', // you can set a custom layout for the error page
  data() {
    return {
      baseUrl: process.env.baseUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 10rem;
}
</style>
