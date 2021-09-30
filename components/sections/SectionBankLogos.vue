<template>
  <div class="logo-section">
    <div class="row">
      <h3 class="heading">
        Vi sammenligner disse {{ numberOfBanks }} bankene for deg
      </h3>
      <div class="bank-logos">
        <div class="logo" id="bluestep">
          <img :src="`${base}/logos/bluestep.svg`" alt="bluestep" />
        </div>
        <div class="logo" id="brabank">
          <img :src="`${base}/logos/brabank.svg`" alt="brabank" />
        </div>
        <div class="logo" id="nordea">
          <img :src="`${base}/logos/nordea.svg`" alt="nordea" />
        </div>
        <div class="logo" id="instabank">
          <img :src="`${base}/logos/instabank.svg`" alt="instabank" />
        </div>
        <div class="logo" id="komplett">
          <img :src="`${base}/logos/komplettbank.svg`" alt="komplett" />
        </div>
        <div class="logo" id="mybank">
          <img :src="`${base}/logos/mybank.svg`" alt="mybank" />
        </div>
        <div class="logo" id="nordax">
          <img :src="`${base}/logos/nordax.svg`" alt="nordax" />
        </div>
        <div class="logo" id="norwegian">
          <img :src="`${base}/logos/norwegian.svg`" alt="norwegian" />
        </div>
        <div class="logo" id="optin">
          <img :src="`${base}/logos/optin.svg`" alt="optin" />
        </div>
        <div class="logo" id="remember">
          <img :src="`${base}/logos/remember.svg`" alt="remember" />
        </div>
        <div class="logo" id="santander">
          <img :src="`${base}/logos/santander.svg`" alt="santander" />
        </div>
        <div class="logo" id="bbbank">
          <img :src="`${base}/logos/bbbank.svg`" alt="bbbank" />
        </div>
        <div class="logo" id="express">
          <img :src="`${base}/logos/express.svg`" alt="express" />
        </div>
        <div class="logo" id="kraft">
          <img :src="`${base}/logos/kraftbank.svg`" alt="kraft" />
        </div>
        <div class="logo" id="thorn">
          <img :src="`${base}/logos/thorn.svg`" alt="thorn" />
        </div>
        <div class="logo" id="resurs">
          <img :src="`${base}/logos/resurs.svg`" alt="resurs" />
        </div>
        <div class="logo" id="easybank">
          <img :src="`${base}/logos/easybank.svg`" alt="easybank" />
        </div>
        <div class="logo" id="ikano">
          <img :src="`${base}/logos/ikano.svg`" alt="ikano" />
        </div>
        <div class="logo" id="ya">
          <img :src="`${base}/logos/ya.svg`" alt="ya" />
        </div>
        <div class="logo" id="sewa">
          <img :src="`${base}/logos/svea.svg`" alt="svea" />
        </div>
        <div class="logo" id="ferratum">
          <img :src="`${base}/logos/ferratum.svg`" alt="ferratum" />
        </div>
        <div class="logo" id="bank2">
          <img :src="`${base}/logos/bank2.svg`" alt="bank2" />
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
      numberOfBanks: process.env.numberOfBanks,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.logo-section {
  padding: 3rem 0 0;
}
.heading {
  text-align: center;
  margin-bottom: 3rem;
}
.bank-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .logo {
    flex: 0 1 11.5rem;
    display: flex;
    justify-content: center;
    padding: 1rem 1rem;
    img {
      width: 12.5rem;
      height: 3.5rem;
      object-fit: contain;
    }
  }
}
@media screen and (min-width: $bp-mobile) {
  .bank-logos {
    .logo {
      flex: 0 1 11.5rem;
    }
  }
}
</style>
