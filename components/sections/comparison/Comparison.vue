<template>
  <div class="comparison-wrapper">
    <div class="comparison-top">
      <Infographics :headerInfo="headerInfo" />
      <Slider :array="bankArray" @sliderValueChange="filterSlider($event)" />
    </div>
    <Sammenligning :bankArray="filteredBankArray" />
  </div>
</template>

<script>
export default {
  props: ['headerInfo', 'bankArray'],
  data() {
    return {
      sliderValue: 0,
    }
  },
  computed: {
    filteredBankArray() {
      if (this.sliderValue) {
        return this.bankArray.filter(
          (x) =>
            x.loan_amount.min <= this.sliderValue &&
            x.loan_amount.max >= this.sliderValue
        )
      } else {
        return this.bankArray
      }
    },
  },
  methods: {
    filterSlider(value) {
      this.sliderValue = value
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.comparison-wrapper {
  background: $bDarkGreen;
}
.comparison-top {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  padding: 3rem 0.5rem 1rem;
}

@media screen and (max-width: 768px) {
  .comparison-top {
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
  }
}
</style>
