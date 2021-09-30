<template>
  <div class="recommended-banks">
    <div class="title">Anbefalte låneaktører</div>
    <div class="bank-list">
      <div class="bank-card" v-for="(bank, idx) in banks" :key="idx">
        <div class="logo">
          <a :href="getBankLink(bank.path)">
            <div class="img-wrapper">
              <img :src="bank.logo" :alt="bank.name" />
            </div>
          </a>
        </div>
        <div class="action">
          <button-apply class="btn-apply" :affiliate="getUrl(bank.affiliate)" />
          <div class="text">Annonselenke</div>
        </div>
        <div class="rating">
          <star-rating
            :rating="bank.rating || 80"
            :size="20"
            :hasText="false"
          />
        </div>
        <div class="amount">
          <div class="value">
            {{ format(bank.loan_amount.min) }} -
            {{ format(bank.loan_amount.max) }} kr
          </div>
          <div class="label">Lånebeløp</div>
        </div>
        <div class="interest">
          <div class="value">
            {{ bank.eff_interest.min }} - {{ bank.eff_interest.max }}%
          </div>
          <div class="label">Eff. rente</div>
        </div>
        <div class="year">
          <div class="value">{{ bank.age }} år</div>
          <div class="label">Alderskrav</div>
        </div>
        <div class="payment">
          <div class="value">{{ bank.payment }} år</div>
          <div class="label">Utbetaling</div>
        </div>
        <div class="example label">
          <span>
            Eksempel: Eff.rente {{ bank.loan_example.effective }}%,
            {{ format(bank.loan_example.loan_amount) }},-, o/{{
              bank.loan_example.years
            }}
            år, Kostnad {{ format(bank.loan_example.cost) }},-, Totalt
            {{
              format(bank.loan_example.cost + bank.loan_example.loan_amount)
            }},-
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatAmount } from '../../utils/formatting'
import ButtonApply from '../common/ButtonApply.vue'
import StarRating from '../common/StarRating.vue'
import BaseUrl from '~/mixins/baseUrl.js'

export default {
  mixins: [BaseUrl],
  components: { StarRating, ButtonApply },
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
  computed: {
    ...mapGetters({
      banks: 'banks/getBanks',
    }),
  },
  methods: {
    format(amount) {
      return formatAmount(amount, { delimiter: '.' })
    },
    getBankLink(path) {
      const re = /\/loan-providers\/(.+)/
      const url = path && typeof path === 'string' && path.match(re)[1]
      const fullUrl = url ? '/lan/lanegiver/' + url : '#'
      return fullUrl
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.recommended-banks {
  margin-bottom: 35px;
}

.title {
  font-size: 18px;
  color: $textPrimary;
  line-height: 22px;
  font-weight: 700;
}
.bank-list {
  margin-top: 20px;
}
.bank-card {
  width: 335px;
  margin-bottom: 10px;
  display: grid;
  background-color: white;
  box-shadow: 0px 0px 10px 2px rgba(51, 51, 51, 0.06);
  border-radius: 10px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 25px 60px 60px 60px 60px;
  grid-template-areas:
    'logo logo'
    'rating rating'
    'amount interest'
    'year payment'
    'action action'
    'example example';
  justify-items: center;
  align-items: center;
}
.logo {
  grid-area: logo;
  height: 100px;
  width: 100%;
  .img-wrapper {
    height: 100%;
    padding: 5px 60px 0;
  }
  img {
    height: 100%;
    margin: auto;
    object-fit: contain;
  }
}
.action {
  grid-area: action;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 17px;
  padding-bottom: 17px;
  .btn-apply {
    margin-top: 7px;
    margin-bottom: 3px;
    width: 170px;
  }
  .text {
    font-size: 10px;
    text-align: center;
    color: $textTertiary;
  }
}
.rating {
  grid-area: rating;
}
.amount {
  grid-area: amount;
}
.interest {
  grid-area: interest;
}
.year {
  grid-area: year;
}
.payment {
  grid-area: payment;
}
.example {
  grid-area: example;
  padding: 0 30px;
}
.value {
  font-size: 12px;
  font-weight: 700;
  line-height: 14px;
  text-align: center;
  color: $textPrimary;
}
.label {
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  color: $textTertiary;
}
@media screen and (max-width: $bp-mobile) {
  .title {
    text-align: center;
  }
  .bank-card {
    width: 100%;
  }
}
</style>
