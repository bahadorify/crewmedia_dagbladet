<template>
  <div class="font-size">
    <footer>
      <div class="row">
        <div class="column">
          <a
            href="https://www.dagbladet.no/"
            class="logo"
            title="Forsiden"
            aria-label="dagbladet"
          >
            <img
              :src="`${base}/logos/dagbladet-logo.svg`"
              alt="Dagbladet-logo"
            />
          </a>
          <div>
            <ul class="footer-ul">
              <li class="footer-li">
                <h3>Postadresse:</h3>
              </li>
              <li>Boks 1184 Sentrum, 0107 Oslo</li>
              <li>
                <h3>Besøksadresse:</h3>
              </li>
              <li>
                <a
                  itemprop="address"
                  href="https://goo.gl/maps/EmpIH"
                  class="visit-address"
                  >Karvesvingen 1, 0579 Oslo</a
                >
              </li>
              <li>
                <div>
                  <span itemprop="phone" class="phone"
                    ><strong>Sentralbord: </strong>
                    <a href="tel:+4724001000" itemprop="name">24 00 10 00</a>
                  </span>
                </div>
              </li>
              <li>
                <div>
                  <span itemprop="phone" class="phone"
                    ><strong>Kundeservice Dagbladet Pluss: </strong>
                    <a href="tel:+4724001000" itemprop="name"
                      >24 00 10 00 - tast 2</a
                    >
                  </span>
                </div>
              </li>
              <li>
                <b>Tilsynsorgan video:</b>
                <a class="link" href="https://medietilsynet.no/" rel="nofollow"
                  >Medietilsynet</a
                >
              </li>

              <li>
                <a href="//www.dagbladet.no/info/" class="button"
                  >Tips oss 24 00 00 00</a
                >
              </li>
            </ul>
          </div>
        </div>
        <nav class="column small-12 medium-4">
          <ul>
            <li>
              <a href="https://kundeservice.dagbladet.no/hc/no" target="_self"
                >Kundeservice Pluss</a
              >
            </li>
            <li>
              <a href="https://www.aller.no/ledige-stillinger" target="_self"
                >Jobb i Dagbladet</a
              >
            </li>
            <li>
              <a
                href="https://www.dagbladet.no/nyheter/redaksjonelle-retningslinjer/66579649"
                target="_self"
                >Vær Varsom-plakaten</a
              >
            </li>
            <li>
              <a
                href="https://www.dagbladet.no/nyheter/abonnementvilkar-for-dagbladet-pluss/60248691"
                target="_self"
                >Abonnementsvilkår Dagbladet Pluss</a
              >
            </li>
            <li>
              <a
                href="https://personvern.aller.no/personvern.html"
                target="_self"
                >Personvernerklæring</a
              >
            </li>
            <li>
              <a
                href="https://personvern.aller.no/cookiepolicy.html"
                target="_self"
                >Om informasjonskapsler</a
              >
            </li>
            <li>
              <a href="https://annonse.aller.no/" target="_self">Annonseinfo</a>
            </li>
            <li>
              <a
                href="https://www.dagbladet.no/shopping/rabattkode/"
                target="_self"
                >Rabattkoder</a
              >
            </li>
            <li>
              <a href="https://www.dagbladet.no/arkiv" target="_self">Arkiv</a>
            </li>
          </ul>
        </nav>
        <ul class="column small-12 medium-4 contact-list">
          <li class="editor-container">
            <div
              class="editor"
              itemscope=""
              itemtype="https://schema.org/Person"
            >
              <span itemprop="jobTitle" class="job-title">Vaktsjef: </span>
              <a
                class="link arrow"
                href="mailto:ingvild.tvervaag@db.no"
                itemprop="email"
                ><span itemprop="name">Ingvild Tvervaag</span></a
              >
            </div>
          </li>
          <li class="editor-container">
            <div
              class="editor"
              itemscope=""
              itemtype="https://schema.org/Person"
            >
              <span itemprop="jobTitle" class="job-title"
                >Ansvarlig redaktør:
              </span>
              <a
                href="mailto:abe@dagbladet.no"
                itemprop="email"
                class="job-name"
              >
                <span itemprop="name">Alexandra Beverfjord</span>
              </a>
            </div>
          </li>
          <li class="editor-container">
            <div
              class="editor"
              itemscope=""
              itemtype="https://schema.org/Person"
            >
              <span itemprop="jobTitle" class="job-title"
                >Nyhetsredaktør:
              </span>
              <a
                href="mailto:fha@dagbladet.no"
                itemprop="email"
                class="job-name"
              >
                <span itemprop="name">Frode Hansen</span>
              </a>
            </div>
          </li>
          <li class="editor-container">
            <div
              class="editor"
              itemscope=""
              itemtype="https://schema.org/Person"
            >
              <span itemprop="jobTitle" class="job-title">Direktør TV: </span>
              <a href="mailto:mads@aller.com" itemprop="email" class="job-name">
                <span itemprop="name">Mads A. Andersen</span>
              </a>
            </div>
          </li>
          <li class="editor-container">
            <div
              class="editor"
              itemscope=""
              itemtype="https://schema.org/Person"
            >
              <span itemprop="jobTitle" class="job-title"
                >Redaktør Pluss:
              </span>
              <a
                href="mailto:hks@dagbladet.no"
                itemprop="email"
                class="job-name"
              >
                <span itemprop="name">Hilde Schjerve</span>
              </a>
            </div>
          </li>
          <li class="editor-container">
            <div
              class="editor"
              itemscope=""
              itemtype="https://schema.org/Person"
            >
              <span itemprop="jobTitle" class="job-title"
                >Politisk Redaktør:
              </span>
              <a
                href="mailto:ger@dagbladet.no"
                itemprop="email"
                class="job-name"
              >
                <span itemprop="name">Geir Ramnefjell</span>
              </a>
            </div>
          </li>
          <li class="editor-container">
            <div
              class="editor"
              itemscope=""
              itemtype="https://schema.org/Person"
            >
              <span itemprop="jobTitle" class="job-title"
                >Kulturredaktør:
              </span>
              <a
                href="mailto:shv@dagbladet.no"
                itemprop="email"
                class="job-name"
              >
                <span itemprop="name">Sigrid Hvidsten</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
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

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';

$font-xs: 0.8em; // 12.8px
$font-sm: 0.875em; // 14px
$font-md: 1em; // 16px
$font-lg: 1.125em; // 18px
$font-xl: 1.25em; // 20px
.font-size {
  font-size: $rootFontSizeBp;
}
footer {
  background: $lightGrey;
  padding-top: 3em;
  h3 {
    font-size: 1.25em;
  }
  .row {
    .column {
      padding: 0 0.3123em;
      margin-bottom: 0.623em;
      margin-right: auto;
    }
  }
  li {
    font-size: $font-md;
    margin-bottom: 0.3em;
  }
  a {
    display: block;
  }
  .button {
    width: 95%;
    background: $red;
    color: white;
    font-size: $font-xs;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    padding: 0.53em 0.3em;
    margin: 0 3em 1.123em 0;
    border-radius: 3px;
    transition: all 0.2s;
    &:hover {
      background: rgba($red, 0.7);
      text-decoration: none;
    }
  }
}

.logo img {
  width: 9em;
  margin-bottom: 0.43em;
}

.job-title {
  font-weight: bold;
}

@media screen and (min-width: $bp-mobile) {
  .font-size {
    font-size: $rootFontSize;
  }
  footer {
    .row {
      display: flex;
      flex-wrap: nowrap;
      .column {
        flex: 0 1 23em;
      }
    }
  }
}
</style>
