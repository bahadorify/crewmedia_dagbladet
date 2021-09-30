<template>
  <div>
    <h1>This is the error page</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ params, error }) {
    return axios
      .get(`https://my-api/posts/${params.id}`)
      .then((res) => {
        return { title: res.data.title }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  },
}
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 10rem;
  text-align: center;
}
</style>
