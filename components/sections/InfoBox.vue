<template>
  <div class="infobox content">
    <h4>Hvem kan søke om forbrukslån?</h4>
    <p>
      Alle kan i utgangspunkt sende en søknad om forbrukslån. Du må imidlertid
      oppfylle følgende vilkår for å få innviglet lånet:
    </p>
    <ul>
      <li>Du må ha en registrert liknet inntekt</li>
      <li>Du må være over 23 år</li>
      <li>Du kan ikke ha aktive inkassosaker</li>
    </ul>
    <p>
      Dersom du ikke oppfyller disse vilkårene, er du hjertelig velkommen
      tilbake når livssituasjonen din har endret seg. Eventuelt kan du søke
      sammen med en medlåntaker.
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.infobox {
  margin-top: 5rem;
  padding: 1px 1rem 1rem 1rem;
  font-size: $font-xs;
  color: white;
  background: $turqoise;
  border-radius: 1rem;
  h4 {
    font-size: $font-sm;
  }
}
</style>
