<template>
  <nuxt-content :document="page" class="content" />
</template>

<script>
export default {
  layout: 'simplePage',
  data() {
    page: ''
  },
  async asyncData({ $content, route }) {
    const pageArr = await $content('simplePages')
      .where({
        slug: { $eq: 'om-oss' },
      })
      .fetch()
    return { page: pageArr[0] }
  },
}
</script>
