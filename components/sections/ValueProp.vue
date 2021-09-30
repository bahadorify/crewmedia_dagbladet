<template>
  <div
    class="banner-wrapper"
    :style="{
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
    }"
  >
    <div class="banner">
      <h2>{{ title }}</h2>
      <p id="main-text">{{ text }}</p>
      <div class="banner-items">
        <div class="banner-item">
          <span class="check">✓ </span>
          Det er helt <strong>uforpliktende</strong>
        </div>
        <div class="banner-item">
          <span class="check">✓ </span>
          Det koster deg <strong>ingenting</strong>
        </div>
        <div class="banner-item">
          <span class="check">✓ </span>
          Du får det <strong>beste tilbudet</strong>
        </div>
      </div>
      <div class="trustpilot">
        <Trustpilot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'imageUrl'],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.banner-wrapper {
  padding: 4rem 3%;
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
}
.banner {
  max-width: 39rem;
  width: 100%;
  min-height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;

  h2 {
    margin-bottom: 1rem;
    line-height: 3rem;
    font-size: 2.5rem;
  }
  p {
    margin-bottom: 1rem;
  }
  #main-text {
    max-width: 32.5rem;
  }
  img {
    width: 10rem;
    margin: 1rem auto 0;
  }
  .banner-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1rem;
    .check {
      color: $red;
    }
  }
}

@media screen and (min-width: $bp-mobile) {
  .banner-wrapper {
    width: 50%;
    margin-left: auto;
  }
  .banner {
    align-items: flex-start;
    margin-left: auto;
    img {
      margin-left: 0;
    }
    .banner-items {
      flex-direction: row;
      flex-wrap: wrap;
      .banner-item:not(:last-child) {
        margin-right: 1rem;
      }
    }
  }
}
</style>
