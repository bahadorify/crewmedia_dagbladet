<template>
  <div class="full-width">
    <div class="container">
      <div class="loan-wrapper">
        <div class="interest">
          <div class="value">{{ bank.eff_interest.min }}%</div>
          <div class="label">Rente fra</div>
        </div>
        <div class="loan-amount">
          <div class="value">
            {{ formatAmount(bank.loan_amount.min) }} kr -
            {{ formatAmount(bank.loan_amount.max) }} kr
          </div>
          <div class="label">Lånebeløp</div>
        </div>
        <div class="loan-period">
          <div class="value">
            <template v-if="bank.loan_period && bank.loan_period.min">
              {{ bank.loan_period.min }} - {{ bank.loan_period.max }} år
            </template>
            <template v-else>Fra 1 år</template>
          </div>
          <div class="label">Låneperiode</div>
        </div>
        <div class="age">
          <div class="value">{{ bank.age }} år</div>
          <div class="label">Alderskrav</div>
        </div>
        <div class="income">
          <div class="value">
            <span v-if="bank.income">{{ bank.income }}</span>
            <span v-else>Ingen</span>
          </div>
          <div class="label">Inntektskrav</div>
        </div>
      </div>
      <div class="example">
        <span>
          Eksempel: Eff.rente {{ bank.loan_example.effective }}%,
          {{ format(bank.loan_example.loan_amount) }},-, o/{{
            bank.loan_example.years
          }}
          år, Kostnad {{ format(bank.loan_example.cost) }},-, Totalt
          {{ format(bank.loan_example.cost + bank.loan_example.loan_amount) }},-
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { formatAmount } from '../../utils/formatting'
export default {
  props: ['bank'],
  data() {
    return {
      formatAmount,
    }
  },
  methods: {
    format(amount) {
      return formatAmount(amount, { delimiter: '.' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.full-width {
  border-top: 1px solid $bGrey;
  border-bottom: 1px solid $bGrey;
}
.loan-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding-top: 25px;
  & > * {
    padding: 0px 35px;
    margin-bottom: 40px;
    border-left: 1px solid $bGrey;
    &:first-child {
      padding-left: 0;
      border-left: 0px;
    }
  }
  .value {
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    color: $textPrimary;
  }
  .label {
    font-size: 10px;
    line-height: 10px;
    color: $textTertiary;
    margin-top: 4px;
  }
}
.example {
  z-index: 10;
  position: absolute;
  bottom: -14px;
  font-size: 12px;
  background: $bMidGrey;
  padding: 5px 12px;
  border-radius: 60px;
}

@media screen and (max-width: $bp-mobile) {
  .container {
    display: flex;
    justify-content: center;
  }
  .loan-wrapper {
    justify-content: center;
    & > * {
      border-right: 1px solid $bGrey;
      &:first-child {
        padding: 0px 35px;
        border-left: 1px solid $bGrey;
      }
    }
  }
  .example {
    margin: 0 auto;
    text-align: center;
  }
}
</style>
