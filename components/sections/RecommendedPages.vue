<template>
  <div class="recommended-pages">
    <div class="title">Anbefalte sider</div>
    <div class="page-list">
      <page-link
        link="/forbrukslan/"
        linkImg="icons/link-img/forbrukslan.svg"
        text="Forbrukslån"
      />
      <page-link
        link="/refinansiering/"
        linkImg="icons/link-img/refinansiering.svg"
        text="Refinansiering"
      />
      <page-link
        link="/boliglan/"
        linkImg="icons/link-img/boliglan.svg"
        text="Boliglån"
      />
      <page-link
        link="/billan/"
        linkImg="icons/link-img/billan.svg"
        text="Billån"
      />
      <page-link
        link="/refinansiering/omstartslan"
        linkImg="icons/link-img/omstartslan.svg"
        text="Omstartslån"
      />
      <page-link
        link="/forbrukslan/smslan"
        linkImg="icons/link-img/smslan.svg"
        text="SMS-lån"
      />
      <page-link
        link="/forbrukslan/smalan"
        linkImg="icons/link-img/smalan.svg"
        text="Smålån"
      />
      <page-link
        link="/forbrukslan/lan-uten-sikkerhet"
        linkImg="icons/link-img/lan-uten-sikkerhet.svg"
        text="Lån uten sikkerhet"
      />
      <page-link
        link="/lan/lan-med-sikkerhet"
        linkImg="icons/link-img/lan-med-sikkerhet.svg"
        text="Lån med sikkerhet"
      />
      <page-link
        link="/forbrukslan/lan-pa-dagen"
        linkImg="icons/link-img/lan-pa-dagen.svg"
        text="Lån på dagen"
      />
      <page-link
        link="/lan/lan-med-betalingsanmerkning"
        linkImg="icons/link-img/lan-med-betalingsanmerkning.svg"
        text="Lån med betalingsanmerkning"
      />
      <page-link
        link="/refinansiering/refinansiering-med-betalingsanmerkning"
        linkImg="icons/link-img/refinansiering-med-betalingsanmerkning.svg"
        text="Refinansiering med betalingsanmerkning"
      />
    </div>
  </div>
</template>

<script>
import PageLink from '../common/PageLink.vue'
export default {
  components: { PageLink },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.recommended-pages {
  margin-bottom: 35px;
}
.title {
  font-size: 18px;
  color: $textPrimary;
  line-height: 22px;
  font-weight: 700;
}
.page-list {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 380px;
}

@media screen and (max-width: $bp-mobile) {
  .recommended-pages {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
