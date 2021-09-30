<template>
  <section :class="`infographics ${openClass}`">
    <div class="block-wrapper">
      <div class="infographics-wrapper infographics-wrapper_bread">
        <div class="title">
          <h1>
            <div itemprop="description">{{ headerInfo.h1 }}</div>
          </h1>
          <h2 class="infographics-wrapper__subtitle">{{ headerInfo.h2 }}</h2>
          <span class="update">Oppdatert {{ updatedAt }}</span>
        </div>
      </div>
      <div class="under-title">
        <div class="under-title__top">
          <button
            class="under-title__more under-title__btn"
            @click="toggleOpen"
          >
            Les {{ openClass ? 'mindre' : 'mer' }}
          </button>
        </div>
        <div class="under-title__more-text" :style="accordStyle" ref="accord">
          <div v-html="$md.render(headerInfo.read_more)" class="content"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Accord from '~/mixins/accordion.js'

export default {
  props: ['headerInfo'],
  mixins: [Accord],
  data() {
    return {
      displayLesMer: 'inline-block',
      displayMoreText: 'none',
    }
  },
  computed: {
    updatedAt() {
      const [month, date, year] = new Date(this.headerInfo.updatedAt)
        .toLocaleDateString('en-US')
        .split('/')
      return `${date}.${month}.${year}`
    },
  },
}
</script>

<style lang="scss">
@import '@/assets/sass/_variables.scss';
.infographics {
  width: 100%;
  max-width: 540px;
  text-align: left;
  font-size: 14px;

  .block-wrapper {
    max-width: 1080px;
    width: 100%;
    margin: 0 auto;
    display: block;
    height: 100%;
    padding: 0 10px;

    .title {
      width: 100%;
      max-width: 840px;
      display: block;
      margin: 0 auto;

      h1 {
        font-weight: bold;
        font-family: $font-family-ssp;
        color: white;
        line-height: 1.2;
      }
      h2 {
        font-weight: normal;
        color: white;
        line-height: 1.2;
        margin-top: 1rem;
      }
      .update {
        font-size: 0.875rem;
        font-weight: normal;
        color: white;
        opacity: 0.5;
        display: block;
        margin-top: 8px;
      }
    }
  }

  .under-title {
    margin-top: 20px;
    text-align: left;
    p {
      font-family: 'Open Sans', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #707073;
      margin-bottom: 10px;
    }
    .content {
      padding: 0;
      color: white;
      p {
        color: white;
      }
    }
  }

  .under-title__btn {
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
    text-transform: uppercase;
    color: white;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 40px;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .under-title__more {
    &::before {
      content: $arrowDPath;
      margin-right: 0.5rem;
    }
  }

  .under-title__more-text {
    opacity: 0;
    transition: all 0.2s;
  }

  &.open {
    .under-title__more-text {
      opacity: 1;
    }
    .under-title__more {
      &::before {
        content: $arrowUPath;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .infographics {
    padding: 0 0 0.5rem;
    margin: 0 auto;
    .block-wrapper {
      .title {
        h1 {
          font-size: 24px;
        }
        h2 {
          font-size: 18px;
        }
        .update {
          font-size: 12px;
        }
      }
      .under-title .under-title__btn {
        font-size: 13px;
      }
    }
  }
}
</style>
