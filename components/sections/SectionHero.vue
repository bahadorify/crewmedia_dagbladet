<template>
  <div>
    <div class="hero">
      <div class="main">
        <ValueProp
          :title="valuePropTitle"
          :text="valuePropText"
          :imageUrl="imageUrl"
        />
        <Calculator
          class="calc"
          :title="calcTitle"
          :amountTitle="calcAmountTitle"
          :actionUrl="actionUrl"
        />
      </div>
      <div class="belt">
        <div class="item">
          <div class="icon baseline circle">
            <img :src="`${base}/img/heart.svg`" alt="heart" />
          </div>
          <strong>9,810</strong> søknader forrige måned
        </div>
        <div class="item">
          <div class="icon baseline circle">
            <img :src="`${base}/img/clock.svg`" alt="clock" />
          </div>
          Du får svar innen kort tid
        </div>
        <div class="item">
          <div class="icon baseline circle">
            <img :src="`${base}/img/smile.svg`" alt="smile" />
          </div>
          Tilbudet du får er uforpliktende
        </div>
        <div class="item">
          <div class="icon baseline circle">
            <img :src="`${base}/img/gift.svg`" alt="gift" />
          </div>
          Vår tjeneste er gratis
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
  props: [
    'valuePropTitle',
    'valuePropText',
    'imageUrl',
    'calcTitle',
    'calcAmountTitle',
    'actionUrl',
  ],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.hero {
  .main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 5.4rem;
  }

  .belt {
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    flex-flow: column wrap;
    align-items: center;
    background: $red;
    color: white;
  }
  .item img {
    height: 0;
    width: 0;
  }
}

@media screen and (min-width: $bp-mobile) {
  .hero {
    .main {
      flex-direction: row;
      align-items: stretch;
      text-align: left;
      .calc {
        width: 50%;
      }
      p {
        font-weight: 400;
      }
    }
    .belt {
      padding: 1.5rem 10rem;
      flex-direction: row;
      .item {
        text-align: left;
        position: relative;
        padding: 0 2rem;
        .icon {
          display: inline-flex;
          align-self: center;
        }

        .icon svg,
        .icon img {
          height: 1em;
          width: 1em;
        }

        .icon.baseline svg,
        .icon img {
          top: 0.6em;
          position: relative;
          background-color: white;
          width: 2em;
          height: 2em;
          border: 0.2em solid white;
          border-radius: 100%;
        }
      }
    }
  }
}
</style>
