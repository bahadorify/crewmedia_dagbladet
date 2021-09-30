<template>
  <div class="full-width">
    <div class="container hero-wrapper">
      <div class="hero-image">
        <img :src="bank.logo" :alt="`${bank.name} logo`" />
      </div>
      <div class="hero-main">
        <breadcrumbs
          :path="[
            { name: 'Lånegiver', url: '#' },
            { name: bank.name, url: '#' },
          ]"
        />
        <h1>{{ bank.name }}</h1>
        <StarRating :rating="bank.rating || 80" :size="25" />
        <div class="action-btns">
          <!-- <button class="btn-grey">Skriv anmeldelse</button> -->
          <a
            :href="getUrl(bank.affiliate)"
            target="_blank"
            class="btn-red btn-flex btn-sok"
          >
            <span>Søk nå</span>
            <img :src="`${base}/icons/arrowR.svg`" alt="arrow-right" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseUrl from '~/mixins/baseUrl.js'

export default {
  mixins: [BaseUrl],
  props: ['bank'],
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.full-width {
  background: $bLightGrey;
}

.hero-wrapper {
  padding-top: 34px;
  padding-bottom: 34px;
  display: flex;
  position: relative;
  .hero-image {
    width: 196px;
    height: 175px;
    margin-right: 50px;
    background: white;
    border: 1px solid #dce2e2;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      object-fit: contain;
    }
  }
  .hero-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .action-btns {
      display: flex;
      justify-content: flex-start;
      max-width: 320px;
      font-size: 13px;
      & > * {
        margin-right: 15px;
      }
      .btn-sok {
        span {
          margin-right: 30px;
          color: white;
        }
        &:hover {
          img {
            transform: translateX(10px);
          }
        }
      }
    }
  }
}
@media screen and (max-width: $bp-mobile) {
  html {
    font-size: $rootFontSize;
  }
  .hero-wrapper {
    flex-direction: column;
    align-items: center;
    position: relative;
    .breadcrumbs {
      position: absolute;
      top: 10px;
    }
    .hero-image {
      margin-right: 0;
      margin: 14px 0;
    }
    .hero-main {
      align-items: center;
      h1 {
        margin-bottom: 14px;
      }
      .action-btns {
        margin-top: 14px;
        & > * {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
