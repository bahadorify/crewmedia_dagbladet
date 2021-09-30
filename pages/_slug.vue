<template>
  <div>
    <Comparison
      v-if="isMain"
      :headerInfo="headerInfo"
      :bankArray="bankArr"
    ></Comparison>
    <div class="wrapper full-width">
      <div class="container container-flex">
        <div class="main">
          <breadcrumbs :path="breadPath" />
          <img :src="getImg" :alt="article.title" />
          <h1 v-if="!isMain">{{ article.h1 }}</h1>
          <div class="article-extra">
            <a
              :href="`${base}/om-oss/${getUrl({
                entity: 'author',
                regex: 'authors',
              })}`"
            >
              <span class="author">{{ article.author }}</span>
            </a>
            <span class="dot">|</span>
            <span class="date">{{ getDate }}</span>
            <span
              v-for="(t, idx) in article.article_tags"
              :key="idx"
              class="tag"
              >{{ t }}</span
            >
          </div>
          <nuxt-content :document="article" class="content" />
        </div>
        <div class="side">
          <toc
            v-if="article.toc.length"
            :tocList="article.toc"
            @scrollHeading="getScrollPixels"
            :scrollPixels="scrollPixels"
          />
          <recommended-banks v-if="!isMain" />
          <latest-articles :articles="latestArticles" />
          <recommended-pages />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Article from '~/mixins/article.js'
import TOC from '~/mixins/toc.js'

export default {
  mixins: [Article, TOC],
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
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: this.schemaScript ? this.schemaScript : '',
          type: 'application/ld+json',
        },
      ],
    }
  },
  data() {
    return {
      article: {},
      base: process.env.baseUrl,
      latestArticles: [],
      title: '',
      description: '',
      keywords: '',
      affiliate: '',
      schemaScript: '',
      category: '',
      author: {},
    }
  },
  async asyncData({ $content, store, route, error }) {
    try {
      // fetch the post
      const postArr = await $content('posts')
        .where({
          path: { $contains: route.params.slug },
        })
        .fetch()
      const article = postArr.find((p) => {
        return p.path === '/posts/' + route.params.slug
      })
      if (!article) {
        throw new Error('Cannot find post')
      }
      const {
        title,
        description,
        keywords,
        affiliate,
        category,
        schema,
        h1,
        h2,
        short_text,
        read_more,
        updatedAt,
      } = article

      const headerInfo = {
        h1,
        h2,
        updatedAt,
        short_text,
        read_more,
      }
      // extract the script in schema
      let schemaScript = ''
      if (schema) {
        const regex = /{(.|\n)*}/
        schemaScript = schema.match(regex)[0]
      }
      // fetch latest articles
      const latestArticles = await $content('posts')
        .where({ recommended: true })
        .sortBy('createdAt', 'desc')
        .limit(5)
        .fetch()
      // fetch author
      const author = await $content('authors')
        .where({
          title: { $eq: article.author },
        })
        .fetch()
      //
      // fetch banks
      const bankArr = await $content('loan-providers')
        .where({
          pages_to_show: {
            $contains: category,
          },
        })
        .sortBy('rank')
        .fetch()
      if (!bankArr.length) {
        throw new Error('Problem fetching banks!')
      }
      await store.dispatch('banks/setInitialBanks', bankArr)

      return {
        article,
        latestArticles,
        title,
        description,
        keywords,
        affiliate,
        schemaScript,
        category,
        author: author[0],
        bankArr,
        headerInfo,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Post not found' })
      console.error(e)
    }
  },
  computed: {
    breadPath() {
      return [
        { name: 'Artikler', url: this.base + '/artikler' },
        { name: this.getAbrigedName(), url: this.base + '/' + this.getUrl() },
      ]
    },
    isMain() {
      return this.article.type === 'main'
    },
  },
  methods: {
    isCurrentPost(post) {
      return post.slug === this.article.slug
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.wrapper {
  padding-top: 40px;
  padding-bottom: 20px;
}

h1 {
  line-height: 37px;
}

.main {
  img {
    width: 100%;
    margin: 18px 0 33px;
  }
}
.article-extra {
  font-size: 14px;
  padding-top: 10px;
  color: $textTertiary;
  display: flex;
  align-items: center;
  a {
    color: $textTertiary;
    &:hover {
      color: $bRed;
    }
  }
  .dot {
    margin: 0 8px;
  }
  .tag {
    height: 27px;
    background-color: $bLightRed;
    color: $bRed;
    font-size: 12px;
    padding: 8px 12px;
    border-radius: 28px;
    margin-left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    // cursor: pointer;
  }
}

.current-post {
  font-weight: bold;
}

@media screen and (max-width: $bp-mobile) {
  .wrapper {
    padding-top: 0;
  }
}
</style>
