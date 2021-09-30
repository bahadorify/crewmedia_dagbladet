<template>
  <div class="calculator-wrapper">
    <div class="calculator">
      <div class="headline">
        <h2>{{ title }}</h2>
        <a href="https://www.axofinans.no/">
          <img :src="`${base}/logos/axo.svg`" alt="axo logo" />
        </a>
      </div>
      <form
        method="post"
        :action="actionUrl || 'https://www.axofinans.no/søk/forbrukslån/'"
        rel="nofollow"
      >
        <label for="loanAmount">{{ amountTitle }}</label
        ><br />
        <select v-model="loanAmount" name="aff_unique1" id="loanAmount">
          <option
            v-for="(amount, idx) of amountList"
            :key="idx"
            :value="amount"
          >
            {{ formatAmount(amount) }} kr
          </option>
        </select>
        <label for="years">Ønsket nedbetalingstid</label><br />
        <select v-model="years" name="aff_unique2" id="years">
          <option v-for="(year, idx) of yearList" :key="idx" :value="year">
            {{ year }} år
          </option>
        </select>
        <div :class="disclaimerClass">
          Ønsket nedbetalingstid over 5 år krever at du refinansierer/samler lån
          og kreditter du har fra før.
        </div>
        <div class="estimate mt">
          <p>Estimert månedsbeløp</p>
          <strong>{{ monthly }}</strong>
        </div>
        <div class="mt">
          <p>Bankene innvilger fra 7,90% nominell rente.</p>
          <p>
            Nom. {{ nominal }}%, eff. {{ effective }}%, kost {{ cost }} kr, tot.
            {{ total }} kr
          </p>
        </div>
        <input class="mt btn-submit" type="submit" value="Neste" />
        <p class="vurdering">Søknaden vurderes av {{ numberOfBanks }} banker</p>
      </form>
    </div>
  </div>
</template>

<script>
import { formatAmount, range } from '../utils/formatting'
import Loan from '../utils/loan'

const RATE = 12.9
const STARTUP_FEE = 950
const MONTHLY_FEE = 30

export default {
  props: {
    title: String,
    amountTitle: String,
    actionUrl: String,
  },
  data() {
    return {
      numberOfBanks: process.env.numberOfBanks,
      base: process.env.baseUrl,
      amountList: range(5000, 500000, 5000),
      yearList: range(1, 15),
      loanAmount: 100000,
      years: 5,
      formatAmount,
    }
  },
  computed: {
    loan() {
      const myLoan = new Loan(
        RATE,
        STARTUP_FEE,
        MONTHLY_FEE,
        this.years,
        this.loanAmount
      )
      return myLoan.stats()
    },
    monthly() {
      return this.loan.monthlyPaymentFormatted
    },
    nominal() {
      return this.loan.rateFormatted
    },
    effective() {
      return this.loan.effectiveFormatted
    },
    total() {
      return this.loan.totalFormatted
    },
    cost() {
      return this.loan.costFormatted
    },
    disclaimerClass() {
      return this.years > 5 ? 'disclaimer' : 'disclaimer hidden'
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.calculator-wrapper {
  padding: 4rem 5%;
  background: #fffafa;
}
.calculator {
  max-width: 37.5rem;
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  text-align: left;
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: $font-xs;
    font-weight: 400;
  }
  input,
  select {
    margin-bottom: 0.8rem;
    width: 100%;
    padding: 0.5rem;
    height: 2.75rem;
  }
  select {
    font-size: 1.3rem;
  }

  label {
    font-size: $font-xs;
  }
  .headline {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    line-height: 3rem;
    img {
      margin-left: 1rem;
    }
  }
  .estimate {
    display: flex;
    justify-content: space-between;
  }
  .mt {
    margin-top: 1rem;
  }
  .btn-submit {
    background: $red;
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
  .vurdering {
    text-align: center;
  }
  .disclaimer {
    border: 1px solid grey;
    padding: 1rem;
    background: white;
    border-radius: 5px;
    transition: all 0.2s;
    font-size: $font-sm;
    font-weight: 400;
  }
  .hidden {
    opacity: 0;
    height: 0;
    padding: 0;
  }
}
</style>
