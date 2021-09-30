<template>
  <!-- TrustBox widget - Starter -->
  <div
    ref="trustboxRef"
    class="trustpilot-widget"
    data-locale="nb-NO"
    data-template-id="5613c9cde69ddc09340c6beb"
    data-businessunit-id="5476fe0400006400057bcaf1"
    data-style-height="100%"
    data-style-width="100%"
    data-theme="dark"
  >
    <a
      href="https://no.trustpilot.com/review/www.axofinans.no"
      target="_blank"
      rel="noopener nofollow"
      >Trustpilot</a
    >
  </div>
  <!-- End TrustBox widget -->
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src:
            'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
        },
      ],
    }
  },
  mounted() {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(this.$refs.trustboxRef, true)
    }
  },
}
</script>

<style lang="scss" scoped>
.trustpilot-widget {
  height: 28px;
  width: 100%;
}
</style>
