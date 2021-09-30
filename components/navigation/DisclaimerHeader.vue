<template>
  <div class="header-container">
    <div :class="topnavClass" id="myTopnav">
      <a :href="base" style="font-weight: 400">ANNONSØRINNHOLD</a>
      <div v-for="(nl, idx) of navlinks" :key="idx">
        <div class="dropdown">
          <div :class="dropbtnClasses[idx]" :id="idx">
            <div class="navTitle" @click="(e) => navigate(e, nl.url)">
              {{ nl.name }}
            </div>
            <div
              v-if="nl.links && nl.links.length"
              @click="toggleShow"
              class="arrow"
            >
              &#9660;
            </div>
          </div>
          <div v-if="nl.links && nl.links.length" class="dropdown-content">
            <template v-for="(link, lindex) of nl.links">
              <template v-if="link.a">
                <a :href="link.url" :key="lindex">{{ link.name }}</a>
              </template>
              <template v-else>
                <a :href="link.url" :key="lindex">{{ link.name }}</a>
              </template>
            </template>
          </div>
        </div>
      </div>
      <a
        href="javascript:void(0);"
        style="font-size: 1rem"
        class="icon"
        @click="toggleResponsive"
        >&#9776;</a
      >
      <img
        class="right logo"
        :src="`${base}/logos/aller.svg`"
        alt="crew media-logo"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      base: process.env.baseUrl,
      topnavClass: 'topnav',
      dropbtnClasses: [
        'dropbtn',
        'dropbtn',
        'dropbtn',
        'dropbtn',
        'dropbtn',
        'dropbtn',
      ],
      navlinks: [
        {
          name: 'Forbrukslån',
          url: '/forbrukslan/',
          links: [
            {
              name: 'Forbrukslånkalkulator',
              url: '/forbrukslan/forbrukslankalkulator',
            },
            {
              name: 'Mikrolån',
              url: '/forbrukslan/mikrolan',
            },
            {
              name: 'Blancolån',
              url: '/lan/blancolan',
            },
            {
              name: 'Lån uten sikkerhet',
              url: '/forbrukslan/lan-uten-sikkerhet',
            },
            {
              name: 'Smålån',
              url: '/forbrukslan/smalan',
            },
            {
              name: 'Minilån',
              url: '/forbrukslan/minilan',
            },
            {
              name: 'Artikler',
              url: '/forbrukslan/artikler',
            },
          ],
        },
        {
          name: 'Refinansiering',
          url: '/refinansiering/',
          links: [
            {
              name: 'Refinansiering av forbrukslån',
              url: '/refinansiering/refinansiering-av-forbrukslan',
            },
            {
              name: 'Refinansiering av kredittkort',
              url: '/refinansiering/refinansiering-av-kredittkort',
            },
            {
              name: 'Refinansiering av smålån',
              url: '/refinansiering/refinansiere-smalan',
            },
            {
              name: 'Omstartslån',
              url: '/refinansiering/omstartslan',
            },
            {
              name: 'Refinansiering med betalingsanmerkning',
              url: '/refinansiering/refinansiering-med-betalingsanmerkning',
            },
            {
              name: 'Refinansiere inkassogjeld',
              url: '/refinansiering/inkassogjeld',
            },
            {
              name: 'Artikler',
              url: '/refinansiering/artikler',
            },
          ],
        },
        {
          name: 'Lån',
          url: '/lan/',
          links: [
            {
              name: 'Lån på dagen',
              url: '/forbrukslan/lan-pa-dagen',
            },
            {
              name: 'Ferielån',
              url: '/lan/ferielan',
            },
            {
              name: 'Lån til oppussing',
              url: '/lan/lan-til-oppussing',
            },
            {
              name: 'Båtlån',
              url: '/lan/batlan',
            },
            {
              name: 'Kredittlån',
              url: '/lan/kredittlan',
            },
            {
              name: 'SMS-lån',
              url: '/forbrukslan/smslan',
            },
            {
              name: 'Lån med sikkerhet',
              url: '/lan/lan-med-sikkerhet',
            },
            {
              name: 'Lån med betalingsanmerkning',
              url: '/lan/lan-med-betalingsanmerkning',
            },
            { name: 'Låne penger', url: '/lan/lane-penger' },
            {
              name: 'Lån til campingvogn',
              url: '/lan/lan-til-campingvogn',
            },
            {
              name: 'Hyttelån',
              url: '/lan/hyttelan',
            },
            {
              name: 'Artikler',
              url: '/lan/artikler',
            },
          ],
        },
        {
          name: 'Billån',
          url: '/billan/',
          links: [
            {
              name: 'Artikler',
              url: '/billan/artikler',
            },
          ],
        },
        {
          name: 'Boliglån',
          url: '/boliglan/',
          links: [
            {
              name: 'Artikler',
              url: '/boliglan/artikler',
            },
          ],
        },
        {
          name: 'Om',
          url: '/forbrukslan/om-oss',
          links: [
            {
              name: 'Brukervilkår',
              url: '/forbrukslan/brukervilkar',
            },
          ],
        },
      ],
    }
  },
  methods: {
    toggleResponsive(e) {
      if (this.topnavClass === 'topnav') {
        this.topnavClass += ' responsive'
      } else {
        this.topnavClass = 'topnav'
      }
    },
    toggleShow(event) {
      const id = event.target.parentElement.id
      this.dropbtnClasses = this.dropbtnClasses.map((x, idx) => {
        if (idx == id) {
          return x === 'dropbtn' ? 'dropbtn show' : 'dropbtn'
        } else {
          return 'dropbtn'
        }
      })
    },
    navigate(e, url) {
      // this.$router.push({ path: url })
      this.toggleResponsive()
      window.location.href = url
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/assets/sass/_variables.scss';
// legg in remove-mobile
// dropdown med mouse-over.
.topnav {
  overflow: hidden;
  background-color: white;
}

.topnav a {
  float: left;
  display: block;
  text-align: center;
  padding: 0.875rem 1rem;
  text-decoration: none;
  font-size: 1rem;
}

.active {
  // background-color: #4caf50;
  // color: white;
  font-weight: normal;
}

.topnav .icon {
  display: none;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  flex-direction: row;
  font-size: 1rem;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
  cursor: pointer;
  .arrow {
    float: right;
    display: none;
  }
  .navTitle {
    padding: 0.875rem 1rem;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 10rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 0.6rem 0;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 0.3rem 1rem;
  text-decoration: none;
  display: block;
  text-align: left;
  font-weight: 400;
}

.topnav a:hover,
.dropdown:hover .dropbtn {
  background-color: $red;
  color: white;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.capitalize {
  text-transform: uppercase;
}
p {
  font-family: roboto;
}

.header-container {
  position: fixed;
  background: white;
  z-index: 100;
  height: 3.6rem;
  width: 100%;
  padding: 0 0.6rem 0 0;
  // display: flex;
  // justify-content: space-between;
  // align-items: baseline;
  // flex-wrap: wrap;
  border-bottom: 5px solid $red;
  text-align: center;
  font-weight: bold;
}

.img {
  width: auto;
  height: 100%;
}

.logo {
  margin-top: 7px;
  max-height: 2.6rem;
  max-width: 110px;
}

.right {
  float: right;
}

.left {
  float: left;
}
@media screen and (max-width: 900px) {
  .dropdown .dropbtn .navTitle {
    padding: 0.875rem 0.5rem;
  }
}

@media screen and (max-width: 750px) {
  .header-container {
    // position: fixed;
    // background: white;
    // z-index: 10;
    height: 3rem;
    // width: 100%;
    // padding: 0.6rem;
    // border-bottom: 5px solid $red;
    // text-align: center;
    // font-weight: bold;
  }
  .topnav a:first-child {
    margin: 10px 0 0 10px;
    padding: 0;
  }
  .topnav img {
    margin-right: 1rem;
    max-height: 1.9rem;
  }
  .topnav a:not(:first-child),
  .dropdown .dropbtn {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
    padding: 0;
    margin-top: 10px;
  }
  .topnav.responsive {
    position: relative;
    overflow-y: scroll;
    max-height: 100vh;
    .icon {
      position: absolute;
      right: 0;
      top: 0;
    }
    a {
      float: none;
      display: block;
      text-align: left;
    }
    .dropdown {
      float: none;
      .dropbtn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        text-align: left;
        .arrow {
          display: block;
          padding: 0 1rem;
        }
        .navTitle {
          flex: 1 0 auto;
        }
      }
      .show {
        background: $red;
      }
      .show + .dropdown-content {
        display: block;
      }
    }
    .dropdown-content {
      position: relative;
      display: none;
    }
  }
  .topnav a:hover,
  .dropdown:hover .dropbtn {
    background-color: inherit;
    color: inherit;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
    color: black;
  }

  .dropdown:hover .dropdown-content {
    overflow: hidden;
  }
}
</style>
