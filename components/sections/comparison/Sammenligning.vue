<template>
  <section class="sammenligning page-bg">
    <div class="background-extension full-width"></div>
    <div class="block-wrapper">
      <div class="proposal-list-header">
        <div class="proposal-list-header__wrapper">
          <div class="header__thumbnail">Bank/lånetilbyder</div>
          <div class="header__amount">Lånesum</div>
          <div class="header__interest">Effektiv rente</div>
          <div class="header__age">Alder</div>
          <div class="header__payout">Utbetaling</div>
        </div>
      </div>

      <div
        v-for="(bank, idx) of bankArray"
        :key="idx"
        class="one-bank-proposition recommended"
      >
        <div class="main-data">
          <div class="top-description">
            <div class="block-bank-thumbnail">
              <div
                v-if="bank.marker_text && typeof bank.marker_text === 'string'"
                class="application-marker application-marker--more-propositions"
              >
                <span>{{ bank.marker_text }}</span>
              </div>
              <div class="wrapper-img">
                <a :href="getBankLink(bank.path)">
                  <img
                    :src="bank.logo"
                    data-lazy-type="image"
                    :alt="bank.name"
                    loading="lazy"
                    sizes="(max-width: 200px) 100vw, 200px"
                  />
                </a>
              </div>
            </div>
            <div class="block-limit-amount">
              <div class="block-limit-amount__inner">
                <div class="block-limit-amount__amt">
                  {{
                    `${formatAmount(bank.loan_amount.min)} - 
                    ${formatAmount(bank.loan_amount.max)} kr`
                  }}
                </div>
                <div
                  class="one-bank-proposition__title one-bank-proposition__title--mobile"
                >
                  Lånesum
                </div>
              </div>
            </div>
            <div class="block-rent">
              <div class="wrapper-content">
                <span class="content-description">
                  {{ europify(bank.eff_interest.min) }}
                  {{
                    bank.eff_interest.max
                      ? '- ' + europify(bank.eff_interest.max) + '%'
                      : ''
                  }}
                </span>
              </div>
              <div
                class="one-bank-proposition__title one-bank-proposition__title--mobile"
              >
                Effektiv rente
              </div>
            </div>
            <div class="block-age-limit">
              <div class="wrapper-content">
                <span class="content-description">{{ bank.age }} år</span>
              </div>
              <div
                class="one-bank-proposition__title one-bank-proposition__title--mobile"
              >
                Alder
              </div>
            </div>
            <div class="block-estimated">
              <div class="wrapper-content">
                <span class="content-description">{{ bank.payment }} dag</span>
              </div>
              <div
                class="one-bank-proposition__title one-bank-proposition__title--mobile"
              >
                Utbetaling
              </div>
            </div>
            <div class="block-search-button">
              <div class="block-search-button__buttons">
                <div class="search-button-wrapper">
                  <div class="button-text">Annonselenke</div>
                  <a
                    target="_blank"
                    :href="getUrl(bank.affiliate)"
                    rel="external nofollow"
                  >
                    <div class="search-button green"><span>Søk her</span></div>
                  </a>
                </div>
                <div class="block-search-button__toggle">
                  <button
                    @click="() => toggleDisplay(idx)"
                    class="block-search-button__toggle-link"
                  >
                    Vis detaljer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-description">
            <div class="bank-example-wrapper">
              <span v-if="bank.loan_example">
                Eff. rente {{ bank.loan_example.effective }}%,
                {{ format(bank.loan_example.loan_amount) }} kr, o/{{
                  bank.loan_example.years
                }}
                år. Kostnad {{ format(bank.loan_example.cost) }} kr, Totalt
                {{
                  format(bank.loan_example.cost + bank.loan_example.loan_amount)
                }}
                kr
                {{
                  bank.loan_example.monthly_payment
                    ? ` eller ${bank.loan_example.monthly_payment} kr/måned (${
                        bank.loan_example.years * 12
                      } bet.)`
                    : ''
                }}
              </span>
            </div>
          </div>
        </div>
        <div
          :style="{ display: additionalDataDisplay[idx] }"
          class="additional-data"
        >
          <div class="one-bank-proposition__additional-blocks">
            <div class="one-bank-proposition__additional-data-link">
              <a :href="getBankLink(bank.path)">
                <span>Les mer om {{ bank.name }}</span></a
              >
            </div>
            <div class="one-bank-proposition__additional-may-info">
              <div class="one-bank-proposition__additional-box">
                <h3 class="one-bank-proposition__additional-title">
                  Nøkkelinfo
                </h3>
                <ul class="one-bank-proposition__additional-list-items">
                  <li
                    v-for="(item, idx) of bank.key_info"
                    :key="idx"
                    class="one-bank-proposition__additional-list-item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="one-bank-proposition__additional-terms">
              <div class="one-bank-proposition__additional-box">
                <h3 class="one-bank-proposition__additional-title">Vilkår</h3>
                <ul class="one-bank-proposition__additional-list-items">
                  <li
                    v-for="(item, idx) of bank.terms"
                    :key="idx"
                    class="one-bank-proposition__additional-list-item"
                  >
                    {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { formatAmount, europify } from '../../../utils/formatting'
import BaseUrl from '~/mixins/baseUrl.js'

export default {
  mixins: [BaseUrl],
  props: ['bankArray'],
  data() {
    return {
      base: process.env.baseUrl,
      additionalDataDisplay: Array(this.bankArray.length).fill('none'),
      formatAmount,
      europify,
    }
  },
  methods: {
    getBankLink(path) {
      const re = /\/loan-providers\/(.+)/
      const url = path && typeof path === 'string' && path.match(re)[1]
      const fullUrl = url ? '/lan/lanegiver/' + url : '#'
      return fullUrl
    },
    format(amount) {
      return formatAmount(amount, { delimiter: '.' })
    },
    toggleDisplay(idx) {
      const arr = [...this.additionalDataDisplay]
      arr[idx] = arr[idx] === 'none' ? 'block' : 'none'
      this.additionalDataDisplay = arr
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
@function min($numbers...) {
  @return m#{i}n(#{$numbers});
}
.sammenligning {
  &.page-bg {
    width: 100%;
    background-color: #f7f9fb;
    // border-top: 1px solid #eceff5;
    border-bottom: 1px solid #eceff5;
    padding-bottom: 3.71rem;
    position: relative;
  }
  .background-extension {
    background: $bDarkGreen;
    height: 100px;
    position: absolute;
  }
  .block-wrapper {
    width: 100%;
    max-width: 1080px;
    padding: 0 10px;
    display: block;
    margin: 0 auto;
    position: relative;
  }
  .proposal-list-header {
    opacity: 1;
    // text-transform: uppercase;
    display: block;
    font-size: 13px;
    font-weight: 500;
    // color: #7990a5;
    color: white;
    // padding-top: 1.42rem;
    text-align: center;
    .proposal-list-header__wrapper {
      // padding: 0.71rem 1px;
      // margin-bottom: 1rem;
      // border-bottom: 1px solid #eceff5;
      display: flex;
      .header {
        &__thumbnail {
          width: 17.68%;
        }
        &__amount {
          width: 22.4%;
        }
        &__interest {
          width: 11.81%;
        }
        &__age {
          width: 9.82%;
        }
        &__payout {
          width: 9.82%;
        }
      }
    }
    & + .one-bank-proposition {
      border: 2px solid $bGreen;
    }
  }
  .one-bank-proposition {
    margin-top: 6px;
    box-shadow: 0 1px 8px 1px rgba(0, 0, 0, 0.05);
    border: solid 1px #eceff5;
    background-color: #ffffff;
    font-size: 14px;
    display: block;
    overflow: hidden;
    border-radius: 10px;
    .application-marker {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      height: 24px;
      width: auto !important;
      background-color: $bLightGreen;
      color: $textSecondary;
      display: flex;
      align-items: center;
      font-size: 10px;
      font-weight: 600;
      padding: 8px 22px 8px 10px;
      overflow: hidden;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
    }
    .main-data {
      display: flex;
      flex-wrap: wrap;
      position: relative;
      .top-description {
        width: 100%;
        display: flex;
        z-index: 1;
        text-align: center;
        border-right: 1px solid #eceff5;
        align-items: center;
        line-height: 1;
        flex-wrap: wrap;
        & > * {
          text-align: center;
          border-right: 1px solid #eceff5;
          padding: 2.28rem 2px;
          display: flex;
          justify-content: center;
          align-items: center;
          line-height: 2.5rem;
          flex-wrap: wrap;
        }
        .one-bank-proposition__title {
          width: 100%;
          text-align: center;
          display: none;
          font-weight: normal;
          font-size: 12px;
          color: #8fa5b7;
          margin-top: 5px;
        }
        .block-search-button__toggle-link {
          float: right;
          // font-family: 'Source Sans Pro', sans-serif;
          height: 40px;
          border-radius: 2rem;
          border: 1px solid;
          align-items: center;
          padding: 0 1rem;
          cursor: pointer;
          padding: 0;
          width: 15rem;
          max-width: 100%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          color: $turqoise;
          background-color: white;
          border-color: rgba(52, 127, 255, 0.2);
          box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.07);
          // text-transform: uppercase;
          &:before {
            content: '';
            margin-right: 6px;
            height: 5px;
            width: 9px;
            display: inline-block;
            opacity: 0.5;
            background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjUiIHZpZXdCb3g9IjAgMCA4IDUiPgogICAgPHBhdGggZmlsbD0iIzM0N0ZGRiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNLjE3MSAxLjIyMmwuOC0uNzc4TDQgMy4zOSA3LjAyOS40NDRsLjguNzc4TDQgNC45NDR6Ii8+Cjwvc3ZnPgo=)
              no-repeat;
          }
          &:focus {
            outline: none;
            box-shadow: none;
          }
        }
        .block {
          &-bank-thumbnail {
            width: 17.67%;
            img {
              width: 12.5rem;
              height: 2.5rem;
              object-fit: contain;
            }
          }
          &-limit-amount {
            width: 22.3%;
            color: #3a4156;
            font-size: min(24px, 1.9vw);
            font-weight: bold;
          }
          &-rent {
            width: 11.81%;
            color: #3a4156;
            font-size: min(14px, 1.4vw);
            font-weight: bold;
          }
          &-age-limit {
            width: 9.82%;
            color: #3a4156;
            font-size: 14px;
            font-weight: 600;
          }
          &-estimated {
            width: 9.82%;
            color: #3a4156;
            font-size: 14px;
            font-weight: 600;
          }
          &-search-button {
            width: 28.58%;
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1;
            background-color: white;
            padding: 0;
            height: 100%;
            overflow: hidden;
            .block-search-button__buttons {
              width: 100%;
              display: flex;
              justify-content: center;
              flex-wrap: wrap;
              & > * {
                padding: 0 6px;
              }
              .block-search-button__toggle {
                width: 100%;
                display: flex;
                justify-content: center;
                margin-top: 0.5rem;
              }
              .search-button-wrapper {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;

                .button-text {
                  width: 100%;
                  font-size: 10px;
                  color: #7990a5;
                  line-height: 1.5rem;
                }
                a {
                  float: left;
                  max-width: 100%;
                  text-decoration: none;
                  .search-button {
                    // font-family: 'Source Sans Pro', sans-serif;
                    height: 40px;
                    border-radius: 2rem;
                    border: 1px solid;
                    align-items: center;
                    padding: 0 1rem;
                    text-transform: uppercase;
                    cursor: pointer;
                    justify-content: space-between;
                    display: inline-flex;
                    align-items: center;
                    font-size: 14px;
                    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.15);
                    background-color: $red;
                    border-color: $red !important;
                    color: white;
                    width: 15rem;
                    max-width: 100%;
                    &:hover {
                      // background-color: #19a781;
                      // border-color: #19a781 !important;
                      opacity: 0.7;
                      span:after {
                        right: -8px;
                      }
                    }
                    span {
                      width: 100%;
                      font-size: 14px !important;
                      text-align: center;
                      position: relative;
                      font-weight: bold !important;
                      &:after {
                        content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDE0IDExIj4KICAgIDxnIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgNC43MTRoMTIuMDU2djEuNTcySDB6Ii8+CiAgICAgICAgPHBhdGggZD0iTTguNzExIDEwLjc2NGwtMS4wODktMS4xTDExLjc0NCA1LjUgNy42MjIgMS4zMzZsMS4wOS0xLjEgNS4yMSA1LjI2NHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
                        position: absolute;
                        top: 0;
                        right: -4px;
                        transition: 0.1s;
                        z-index: 1;
                        background: none !important;
                        margin: 0 !important;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      .bottom-description {
        width: 100%;
        display: flex;
        border-top: 1px solid #eceff5;
        & > * {
          text-align: center;
          border-right: 1px solid #eceff5;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem 2px;
          left: 0;
        }
        .rating-wrapper {
          width: 17.67%;
          flex-wrap: wrap;
          left: 0;
          .rating-description {
            display: inline-block;
            font-size: 11px;
            // font-family: 'Source Sans Pro', sans-serif;
            color: #8fa5b7;
            margin-left: 5px;
            vertical-align: middle;
            .rating-numbers {
              display: none;
            }
          }
        }
        .bank-example-wrapper {
          font-size: 14px;
          width: 71.32%;
          color: #3a4156;
        }
      }
    }
    .additional-data {
      // display: none;
      width: 100%;
      border-top: solid 1px #eceff5;
    }
    .one-bank-proposition__additional-blocks {
      display: flex;
      width: 100%;
      position: relative;
      padding: 1rem 0.71rem;
      & > * {
        min-width: 25%;
        padding: 0 4px;
        flex: 1 1;
      }
    }
    .one-bank-proposition__additional-data-link {
      position: absolute;
      z-index: 1;
      right: 0.71rem;
      bottom: 1rem;
      width: auto;
      min-width: auto;
      a {
        color: $turqoise;
        font-size: 13px;
        font-weight: 600;
        display: block;
        line-height: 1;
        &:hover:after {
          right: -7px;
        }
        span {
          color: inherit;
          font-size: inherit;
          vertical-align: middle;
          text-decoration: underline;
        }
        &:after {
          content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxMSIgdmlld0JveD0iMCAwIDE0IDExIj4KICAgIDxnIGZpbGw9IiMzNDdGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgNC43MTRoMTIuMDU2djEuNTcySDB6Ii8+CiAgICAgICAgPHBhdGggZD0iTTguNzExIDEwLjc2NGwtMS4wODktMS4xTDExLjc0NCA1LjUgNy42MjIgMS4zMzZsMS4wOS0xLjEgNS4yMSA1LjI2NHoiLz4KICAgIDwvZz4KPC9zdmc+Cg==);
          margin-left: 0.71rem;
          vertical-align: middle;
          position: relative;
          right: 0;
          transition: 0.1s;
          opacity: 0.5;
        }
      }
    }
    .one-bank-proposition__additional-box {
      background-color: #f7f9fb;
      border-radius: 3px;
      border: solid 1px rgba(52, 127, 255, 0.05);
      width: 100%;
      padding: 1.21rem 1.14rem;
      .one-bank-proposition__additional-title {
        font-size: 13px;
        font-weight: 600;
        color: #3a4156;
        line-height: 1;
      }
      .one-bank-proposition__additional-list-items {
        list-style: none !important;
        line-height: 1.2;
        margin-top: 0.57rem;
        .one-bank-proposition__additional-list-item {
          font-size: 14px;
          color: #7990a5;
          line-height: 1.2;
          margin-top: 0.92rem;
          padding-left: 0.85rem;
          position: relative;
          &:first-child {
            margin-top: 0;
          }
          &:before {
            content: '\f111';
            font-family: FontAwesome;
            font-size: 5px;
            width: 5px;
            color: $turqoise;
            position: absolute;
            top: 1px;
            left: 0;
            z-index: 1;
            height: 100%;
            display: flex;
            align-items: center;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .sammenligning {
    .proposal-list-header {
      opacity: 0;
      display: none !important;
    }
    .one-bank-proposition {
      .main-data {
        .top-description {
          flex-wrap: wrap;
          & > * {
            padding-top: 12px;
            padding-bottom: 12px;
            border-left: none;
            border-right: none;
            line-height: 1rem;
          }
          .one-bank-proposition__title--mobile {
            display: block;
          }
          .block-bank-thumbnail {
            width: 100%;
            justify-content: flex-start;
            border-bottom: 1px solid #eceff5;
            height: 74px;
            display: flex;
            align-items: center;
            padding-top: 0;
            padding-bottom: 0;
            .wrapper-img {
              width: 100%;
              img {
                margin: auto;
              }
            }
          }
          .block-limit-amount {
            width: 50%;
            font-size: 1.1rem;
            font-weight: bold;
            border-bottom: 1px solid #eceff5;
            border-right: 1px solid #eceff5;
          }
          .block-rent {
            width: 50%;
            font-size: 1.1rem;
            border-bottom: 1px solid #eceff5;
          }
          .block-age-limit {
            width: 50%;
            font-size: 1.1rem;
            font-weight: bold;
            border-bottom: 1px solid #eceff5;
            border-right: 1px solid #eceff5;
          }
          .block-estimated {
            width: 50%;
            font-size: 1.1rem;
            border-bottom: 1px solid #eceff5;
          }
          .block-search-button {
            width: 100%;
            position: initial;
            height: auto;
            padding: 8px 9px 16px 9px;
            .block-search-button__buttons {
              width: 70%;
              .block-search-button__toggle {
                width: 32%;
              }
              .block-search-button__toggle-link {
                font-size: 0.55rem;
                margin-top: 0.95rem;
              }
              .search-button-wrapper {
                width: 68%;
                .button-text {
                  max-width: none;
                  width: 100%;
                  padding-left: 0;
                  padding-right: 0;
                }
                a {
                  width: 100%;
                  max-width: none;
                }
              }
            }
          }
        }

        .bottom-description {
          padding-left: 10px;
          padding-right: 10px;
          & > * {
            border-left: none;
            border-right: none;
          }
          .bank-example-wrapper {
            width: 100%;
            border-right: none !important;
          }
          .rating-wrapper {
            width: 50%;
            position: absolute;
            z-index: 1;
            top: 24px;
            left: 50%;
            max-height: 74px;
          }
        }
      }
      .additional-data {
        border-top: none;
        .one-bank-proposition__additional-blocks {
          flex-wrap: wrap;
          padding-top: 0;
          padding-bottom: 42px;
          & > * {
            width: 100%;
            flex: none;
          }
        }
        .one-bank-proposition__additional-data-link {
          bottom: 21px;
          right: 0px;
          width: 50%;
        }
      }
    }
  }
}
</style>
