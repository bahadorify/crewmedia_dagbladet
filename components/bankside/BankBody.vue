<template>
  <section class="full-width bank-body">
    <div class="container bank-container">
      <div class="accordion-wrapper">
        <bank-accordion :bank="bank" />
      </div>
      <div class="side-wrapper">
        <bank-side-info :bank="bank" class="info" />
        <div class="sok">
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
  </section>
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

.bank-body {
  background: $bLightGrey;
  padding-top: 50px;
  padding-bottom: 50px;
}
.bank-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.accordion-wrapper {
  flex: 0 1 690px;
  border-radius: 10px;
  margin-right: 10px;
  background: white;
  box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.06);
}
.side-wrapper {
  flex: 0 0 335px;
  .info {
    border-radius: 10px;
    background: $bMidGrey;
    box-shadow: 0px 1px 0px #e2dfe0;
  }
  .sok {
    margin-top: 30px;
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

@media screen and (max-width: $bp-mobile) {
  .bank-container {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .accordion-wrapper {
    margin-right: 0;
    margin-top: 30px;
    order: 2;
    flex: none;
  }
}
</style>
