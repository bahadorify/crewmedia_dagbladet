<template>
  <div class="content-area container">
    <div class="post">
      <nuxt-content :document="author" class="content" />
    </div>
    <div class="related">
      <h3>Artikler skrevet av {{ author.title }}</h3>

      <ul>
        <li v-for="(post, idx) of authorPosts" :key="idx">
          <a :href="`${base}/${post.slug}`">{{ post.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.title} | %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
        },
      ],
    }
  },
  layout: 'simplePage',
  data() {
    return {
      base: process.env.baseUrl,
      author: {},
      authorPosts: [],
      title: '',
      description: '',
      keywords: '',
    }
  },
  async asyncData({ $content, route, error }) {
    try {
      const authArr = await $content('authors')
        .where({ slug: { $eq: route.params.author } })
        .fetch()
      if (!authArr.length) {
        throw new Error('Cannot find post')
      }
      const author = authArr[0]
      const { title, description, keywords } = author
      const authorPosts = await $content('posts')
        .where({ author: { $eq: author.title } })
        .sortBy('createdAt', 'asc')
        .fetch()
      return {
        author,
        title,
        description,
        keywords,
        authorPosts,
      }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'Author not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.content-area {
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  .post {
    flex: 0 1 75%;
    padding: 0 3rem 0 1rem;
  }
  .related {
    flex: 0 1 25%;
    padding: 1rem 0;
    li {
      margin: 1rem 0;
    }
  }
}

.current-post {
  font-weight: bold;
}

@media screen and (min-width: $bp-mobile) {
  .content-area {
    flex-direction: row;
  }
}
</style>
