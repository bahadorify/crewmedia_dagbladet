<template>
  <div class="review-wrapper">
    <div class="star-wrapper">
      <div class="star-rating" :style="`width:${size * 5 + 12}px`">
        <div class="empty-stars">
          <img
            :src="`${base}/icons/star-empty.svg`"
            alt="star"
            :style="`height:${size}px;width:${size}px`"
          />
          <img
            :src="`${base}/icons/star-empty.svg`"
            alt="star"
            :style="`height:${size}px;width:${size}px`"
          />
          <img
            :src="`${base}/icons/star-empty.svg`"
            alt="star"
            :style="`height:${size}px;width:${size}px`"
          />
          <img
            :src="`${base}/icons/star-empty.svg`"
            alt="star"
            :style="`height:${size}px;width:${size}px`"
          />
          <img
            :src="`${base}/icons/star-empty.svg`"
            alt="star"
            :style="`height:${size}px;width:${size}px`"
          />
        </div>
        <div class="full-star" :style="`width: ${rating}%`">
          <div class="full-star-helper">
            <img
              :src="`${base}/icons/star-full.svg`"
              alt="star"
              :style="`height:${size}px;width:${size}px`"
            />
            <img
              :src="`${base}/icons/star-full.svg`"
              alt="star"
              :style="`height:${size}px;width:${size}px`"
            />
            <img
              :src="`${base}/icons/star-full.svg`"
              alt="star"
              :style="`height:${size}px;width:${size}px`"
            />
            <img
              :src="`${base}/icons/star-full.svg`"
              alt="star"
              :style="`height:${size}px;width:${size}px`"
            />
            <img
              :src="`${base}/icons/star-full.svg`"
              alt="star"
              :style="`height:${size}px;width:${size}px`"
            />
          </div>
        </div>
      </div>
      <div class="rating" v-if="hasText">
        <span class="rating-five">{{ ratingFive }}</span
        >/5
      </div>
    </div>
    <!-- <div class="review">49 anmeldelser</div> -->
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      default: 80,
    },
    size: {
      type: Number,
      default: 20,
    },
    hasText: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      base: process.env.baseUrl,
    }
  },
  computed: {
    ratingFive() {
      const realRating = this.rating / 20
      const digits = this.rating % 20 ? 1 : 0
      return realRating.toFixed(digits)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
.review-wrapper {
  display: flex;
  align-items: center;
  font-family: $font-family-lato;
  color: $textTertiary;
}
.star-wrapper {
  display: flex;
  align-items: center;
}
.star-rating {
  vertical-align: middle;
  font-size: 0;
  position: relative;
  display: inline-block;
  img {
    margin-left: 3px !important;
    &:first-child {
      margin-left: 0 !important;
    }
  }
}
.empty-stars {
  display: flex;
  vertical-align: top;
}
.full-star {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  overflow: hidden;
  color: #f8a025;
  text-align: left;
}
.full-star-helper {
  position: relative;
  display: flex;
  height: 100%;
  width: 200%;
}
.rating {
  font-size: 20px;
  margin-left: 12px;
  letter-spacing: 2px;
}
span.rating-five {
  color: $bRed;
  font-weight: 600;
}
.review {
  font-size: 14px;
  margin-left: 18px;
}
</style>
