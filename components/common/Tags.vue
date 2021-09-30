<template>
  <div class="tags">
    <div class="title">Kategorier:</div>
    <div class="tag-list">
      <ul>
        <li
          v-for="(t, idx) in filters.tags"
          :key="idx"
          :class="{ active: t === filters.tag }"
          @click="changeTag(t)"
        >
          {{ t }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      filters: 'articles/getFilters',
    }),
  },
  methods: {
    changeTag(t) {
      this.$store.dispatch('articles/filterArticles', t)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.tags {
  margin-bottom: 32px;
  display: flex;
  justify-content: space-between;
  .title {
    font-style: italic;
  }
}
.tag-list ul {
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  li {
    height: 27px;
    background-color: $bMidGrey;
    color: $textSecondary;
    font-size: 12px;
    padding: 0 12px;
    border-radius: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 8px 8px;
    cursor: pointer;

    &.active {
      background-color: $bLightRed;
      color: $bRed;
    }
  }
}

@media screen and (max-width: $bp-mobile) {
  .tags {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    .title {
      margin-bottom: 10px;
    }
  }
  .tag-list ul {
    justify-content: center;
  }
}
</style>
