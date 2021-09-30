<template>
  <section class="slider-section">
    <div class="block-wrapper">
      <div class="slider-wrapper">
        <div class="slider-header">
          <h3>Velg ønsket lånebeløp:</h3>
          <div class="slider-input-manual">
            <input
              type="number"
              class="slider-input-manual__value"
              id="input-amount"
              maxlength="7"
              :min="min"
              :max="max"
              :step="step"
              v-model="value"
              @input="emitValue"
              @change="keepBounded"
            />
            <div class="slider-input-manual__border"></div>
            <div class="slider-input-manual__currency"><span>kr</span></div>
          </div>
        </div>
        <div class="slidecontainer">
          <input
            type="range"
            :min="min"
            :max="max"
            :step="step"
            v-model="value"
            class="slider"
            id="myRange"
            @input="emitValue"
          />
        </div>
        <div class="slider-default-amounts">
          <span id="min-default-amount">{{ formatAmount(min) }} kr</span>
          <span id="max-default-amount">{{ formatAmount(max) }} kr</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { formatAmount, europify } from '../../../utils/formatting'

export default {
  props: ['array'],
  data() {
    return {
      formatAmount,
      value: 100000,
    }
  },
  computed: {
    min() {
      if (this.array.length === 0) return 0
      const minRange = this.array.map((x) => x.loan_amount.min)
      return Math.min(...minRange)
    },
    max() {
      if (this.array.length === 0) return 100000
      const maxRange = this.array.map((x) => x.loan_amount.max)
      return Math.max(...maxRange)
    },
    step() {
      if (this.min % 5000 === 0) {
        return 5000
      } else {
        return 1000
      }
    },
  },
  methods: {
    keepBounded() {
      if (this.value < this.min) {
        this.value = this.min
      }
      if (this.value > this.max) {
        this.value = this.max
      }
      this.emitValue()
    },
    emitValue() {
      this.$emit('sliderValueChange', this.value)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.slider-section {
  width: 100%;
  max-width: 540px;
  margin-top: 7.5rem;
  padding-left: 2.1rem;
}

.block-wrapper {
  width: 100%;
  margin: 0 auto;
  display: block;
  height: 100%;
  padding: 0 10px;

  .slider-wrapper {
    max-width: 600px;
    margin: 0 auto;

    .slider-header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      h3 {
        color: white;
        font-weight: 400;
        font-size: 1.25rem;
      }

      .slider-input-manual {
        position: relative;
        display: flex;

        #input-amount {
          border: none;
        }

        .slider-input-manual__value,
        .slider-input-manual__currency {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          height: 36px;
          position: absolute;
          background: $bDarkGreen;
          border-radius: 35px;
          top: 2px;
          z-index: 1;
          box-sizing: border-box;
          padding: 0;
          display: flex;
          align-items: center;
        }

        .slider-input-manual__value {
          left: 2px;
          width: 146px;
          text-align: center;
          padding: 0 20px 0 10px;
          &:focus {
            outline: none;
          }
        }
        .slider-input-manual__border {
          width: 180px;
          height: 40px;
          border-radius: 35px;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06);
          border: solid 1px rgba(143, 165, 183, 0.28);
          background-color: $bDarkGreen;
        }

        .slider-input-manual__currency {
          position: absolute;
          z-index: 1;
          top: 2px;
          right: 2px;
          width: 30px;
          span {
            display: inline-block;
            line-height: 1 !important;
          }
        }
      }
    }

    .slider-default-amounts {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & > * {
        font-size: 12px;
        line-height: 100%;
        font-weight: 600;
        font-family: 'Source Sans Pro', sans-serif;
        color: $textTertiary;
      }
    }
  }
}

.slidecontainer {
  margin: 10px 0;
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 6px; /* Specified height */
  border-radius: 5px;
  background: #eceff5; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 44px; /* Set a specific slider handle width */
  height: 30px; /* Slider handle height */
  background: $bRed $arrowLRPath no-repeat center; /* Green background */
  border-radius: 24px;
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 44px; /* Set a specific slider handle width */
  height: 30px; /* Slider handle height */
  background: $bRed $arrowLRPath no-repeat center; /* Green background */
  border-radius: 24px;
  cursor: pointer; /* Cursor on hover */
}

@media screen and (max-width: 768px) {
  .slider-section {
    margin-top: 1rem;
    padding: 0;
  }
  .block-wrapper {
    margin: 0 auto;
    .slider-wrapper .slider-header {
      h3 {
        font-size: 20px;
      }
      .slider-input-manual {
        .slider-input-manual__value,
        .slider-input-manual__currency {
          font-size: 20px;
        }
        // .slider-input-manual__border {
        //   width: 20rem;
        //   height: 2.4rem;
        //   border-radius: 5px;
        //   box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.06);
        //   border: solid 1px rgba(143, 165, 183, 0.28);
        //   background-color: white;
        // }
      }
    }
  }
}
</style>
