<template>
  <div>
    <Header />
    <DisclaimerHeader />
    <div class="spacer"></div>
    <div class="simple-page container">
      <div class="buttons">
        <ContentBtn text="FORBRUKSLÅN" :url="base" />
        <ContentBtn text="REFINANSIERING" :url="`${base}/refinansiering/`" />
        <ContentBtn text="LÅN" :url="`${base}/lan/`" />
        <ContentBtn
          text="LÅN UTEN SIKKERHET"
          :url="`${base}/lan-uten-sikkerhet/`"
        />
      </div>
      <Nuxt />
      <div class="buttons">
        <ContentBtn text="OM OSS" :url="`${base}/om-oss/`" />
        <ContentBtn text="BRUKEVILKÅR" :url="`${base}/brukervilkar/`" />
        <ContentBtn
          text="PERSONVERN"
          url="https://personvern.aller.no/personvern.html"
        />
      </div>
    </div>
    <SectionBankLogos />
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

img {
  width: auto;
}
.buttons {
  padding: 2rem 0;
  display: flex;
  flex-wrap: wrap;
  a {
    margin-top: 0.2rem;
  }
}
@media screen and (max-width: $bp-mobile) {
  .buttons {
    justify-content: center;
    a {
      padding: 1rem;
    }
  }
}
</style>
