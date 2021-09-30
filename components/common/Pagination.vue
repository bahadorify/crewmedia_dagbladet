<template>
  <div class="pagination">
    <ul class="page-list" v-if="pagination.numPages > 1">
      <div
        class="arrows previous"
        v-if="pagination.page !== 1"
        @click="previousPage()"
      >
        <img :src="`${base}/icons/redArrowL.svg`" alt="" />
      </div>
      <li
        v-for="p in pagination.numPages"
        :key="p"
        :class="{ active: p === pagination.page }"
        @click="changeCurrentPage(p)"
      >
        {{ p }}
      </li>
      <div
        class="arrows next"
        v-if="pagination.page !== pagination.numPages"
        @click="nextPage()"
      >
        <img :src="`${base}/icons/redArrowR.svg`" alt="" />
      </div>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['scrollPixels'],
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
  computed: {
    ...mapGetters({
      pagination: 'articles/getPagination',
    }),
  },
  methods: {
    changeCurrentPage(p) {
      this.$store.dispatch('articles/paginateArticles', p)
      this.handleScroll()
    },
    previousPage() {
      this.$store.dispatch(
        'articles/paginateArticles',
        this.pagination.page - 1
      )
      this.handleScroll()
    },
    nextPage() {
      this.$store.dispatch(
        'articles/paginateArticles',
        this.pagination.page + 1
      )
      this.handleScroll()
    },
    handleScroll() {
      this.$emit('scrollUp')
      this.$nextTick(() => {
        window.scrollTo({
          top: this.scrollPixels,
          behavior: 'smooth',
        })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.page-list {
  display: flex;
  align-items: center;
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-family: $font-family-ssp;
    font-size: 14px;
    margin-right: 18px;
  }
  li {
    height: 32px;
    width: 32px;
    background-color: $bLightRed;
    color: $bRed;
    border-radius: 50%;

    &.active,
    &:hover {
      background-color: $bRed;
      color: white;
      font-weight: 700;
    }
  }
  .arrows {
    background-color: white;
    height: 40px;
    width: 62px;
    border-radius: 25px;
    border: 1px solid $bGrey;
    img {
      transition: all 0.2s;
    }
    &:hover {
      background-color: $bLightRed;
      border: 1px solid $bLightRed;
      &.next img {
        margin-left: 10px;
      }
      &.previous img {
        margin-right: 10px;
      }
    }
  }
}
</style>
