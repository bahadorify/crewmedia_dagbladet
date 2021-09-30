<template>
  <div class="linkhub full-width">
    <section class="hero">
      <h1>Få hjelp med din økonomi</h1>
      <p>
        Renten er individuell og du må sende inn lånesøknad for å få nøyaktig
        rente. Det er helt gratis og uforpliktende å søke.
      </p>
    </section>
    <section class="features">
      <div class="wrapper">
        <div class="feature">
          <img :src="`${baseUrl}/icons/link-img/finance.svg`" alt="finance" />
          <span class="text">Sammenlikning av lån</span>
        </div>
        <div class="feature">
          <img :src="`${baseUrl}/icons/link-img/loan.svg`" alt="loan" />
          <span class="text">Anmeldelser av lånegivere</span>
        </div>
        <div class="feature">
          <img
            :src="`${baseUrl}/icons/link-img/money-bag.svg`"
            alt="money-bag"
          />
          <span class="text">Helt gratis og uforpliktende</span>
        </div>
      </div>
    </section>
    <section class="links">
      <div class="wrapper">
        <h2 class="title">Hilket lån ønsker du?</h2>
        <div class="page-list">
          <page-link-big
            link="/forbrukslan/"
            linkImg="icons/link-img/forbrukslan.svg"
            text="Forbrukslån"
          />
          <page-link-big
            link="/refinansiering/"
            linkImg="icons/link-img/refinansiering.svg"
            text="Refinansiering"
          />
          <page-link-big
            link="/boliglan/"
            linkImg="icons/link-img/boliglan.svg"
            text="Boliglån"
          />
          <page-link-big
            link="/billan/"
            linkImg="icons/link-img/billan.svg"
            text="Billån"
          />
          <page-link-big
            link="/refinansiering/omstartslan"
            linkImg="icons/link-img/omstartslan.svg"
            text="Omstartslån"
          />
          <page-link-big
            link="/forbrukslan/smslan"
            linkImg="icons/link-img/smslan.svg"
            text="SMS-lån"
          />
          <page-link-big
            link="/forbrukslan/smalan"
            linkImg="icons/link-img/smalan.svg"
            text="Smålån"
          />
          <page-link-big
            link="/forbrukslan/lan-uten-sikkerhet"
            linkImg="icons/link-img/lan-uten-sikkerhet.svg"
            text="Lån uten sikkerhet"
          />
          <page-link-big
            link="/lan/lan-med-sikkerhet"
            linkImg="icons/link-img/lan-med-sikkerhet.svg"
            text="Lån med sikkerhet"
          />
          <page-link-big
            link="/forbrukslan/lan-pa-dagen"
            linkImg="icons/link-img/lan-pa-dagen.svg"
            text="Lån på dagen"
          />
          <page-link-big
            link="/lan/lan-med-betalingsanmerkning"
            linkImg="icons/link-img/lan-med-betalingsanmerkning.svg"
            text="Lån med betalingsanmerkning"
          />
          <page-link-big
            link="/refinansieringrefinansiering-med-betalingsanmerkning"
            linkImg="icons/link-img/refinansiering-med-betalingsanmerkning.svg"
            text="Refinansiering med betalingsanmerkning"
          />
        </div>
      </div>
    </section>
    <section class="sammenlikn">
      <h2>Sammenlign låneprodukter med Dagbladet Forbrukslån</h2>
      <div class="items">
        <div class="item">
          <img
            :src="`${baseUrl}/icons/link-img/finance-green.svg`"
            alt="finance"
          />
          <div class="subtitle">Sammenlikn</div>
          <div class="title">Låneprodukter</div>
        </div>
        <div class="item">
          <img :src="`${baseUrl}/icons/link-img/interest.svg`" alt="interest" />
          <div class="subtitle">Sikre deg</div>
          <div class="title">Lavest mulig rente</div>
        </div>
        <div class="item">
          <img
            :src="`${baseUrl}/icons/link-img/piggy-bank.svg`"
            alt="piggy-bank"
          />
          <div class="subtitle">Lån smartere og</div>
          <div class="title">Spar penger</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BaseURL from '~/mixins/baseUrl.js'

export default {
  mixins: [BaseURL],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.linkhub {
  background: white;
}
.hero,
.sammenlikn {
  font-family: $font-family-ssp;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  text-align: center;
  h1 {
    font-size: 31px;
    color: $textPrimary;
    margin-bottom: 9px;
  }
  p {
    font-size: 16px;
    color: $textSecondary;
    max-width: 480px;
  }
}
.features {
  background: $bDarkGreen;
  color: white;
  .wrapper {
    max-width: 880px;
    padding: 12px 0px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .feature {
    display: flex;
    align-items: center;
    padding: 10px;
    img {
      margin-right: 10px;
    }
  }
}
.links {
  background: $bLightGrey;
  .wrapper {
    max-width: 720px;
    padding: 60px 10px 70px 10px;
    margin: auto;
    text-align: center;
    .title {
      font-size: 26px;
      font-family: $font-family-ssp;
      font-weight: 600;
      color: $textPrimary;
      margin-bottom: 40px;
    }
    .page-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      & > * {
        margin: 5px;
      }
    }
  }
}
.sammenlikn {
  color: $textSecondary;
  padding: 50px 10px;
  h2 {
    font-size: 26px;
    font-weight: 600;
    font-family: $font-family-ssp;
    margin-bottom: 20px;
  }
  .items {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 640px;
    .item {
      padding: 20px 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 24px;
      img {
        margin-bottom: 10px;
      }
      .subtitle {
        font-size: 16px;
        font-weight: 400;
      }
      .title {
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}

@media screen and (max-width: $bp-mobile) {
  .hero {
    h1 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  .features {
    .wrapper {
      flex-direction: column;
      align-items: center;
    }
  }
  .links .wrapper .page-list {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;
  }
  .sammenlikn {
    .items {
      flex-direction: column;
    }
  }
}
</style>
