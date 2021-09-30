<template>
  <div class="all">
    <Header />
    <DisclaimerHeader />
    <div class="spacer"></div>
    <Nuxt />
    <!-- <SectionBankLogos /> -->
    <Footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.all {
  background: $bLightGrey;
}
</style>
