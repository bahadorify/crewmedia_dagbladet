<template>
  <div :class="`faq ${openClass}`">
    <div class="question" @click="toggleOpen">
      <div class="text">
        <nuxt-content :document="faq.q" class="accordion-content" />
      </div>
      <div class="icon">
        <div class="line line1"></div>
        <div class="line line2"></div>
      </div>
    </div>
    <div class="answer" :style="accordStyle" ref="accord">
      <nuxt-content :document="faq.a" class="content" />
    </div>
  </div>
</template>

<script>
import Accord from '~/mixins/accordion.js'

export default {
  props: ['faq'],
  mixins: [Accord],
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';

.faq {
  padding: 0px 25px;
  border-bottom: 1px solid $bGrey;
  font-size: 18px;
  &:last-child {
    border-bottom: 0;
  }
  .question {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    padding: 20px 0;
    cursor: pointer;
    transition: all 0.2s;
    .icon {
      background: $bLightRed;
      border-radius: 50%;
      height: 24px;
      width: 24px;
      position: relative;
      flex: 0 0 auto;
      transition: all 0.2s;
      .line {
        width: 10px;
        height: 2px;
        background: $bRed;
        position: absolute;
        top: 47%;
        left: 31%;
        transition: all 0.2s;
      }
      .line2 {
        transform: rotateZ(90deg);
      }
    }
  }
  .answer {
    color: $textSecondary;
    opacity: 0;
    transition: all 0.2s;
    overflow-y: auto;
    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &:hover {
    .question {
      color: red;
      .icon {
        background: $bRed;
        .line {
          background: white;
        }
      }
    }
  }

  &.open {
    .question {
      color: $bRed;
      padding-bottom: 0;
      .icon {
        background: $bRed;
        .line {
          background: white;
        }
        .line2 {
          transform: rotateZ(0);
        }
      }
    }
    .answer {
      opacity: 1;
      margin-bottom: 10px;
      padding-bottom: 10px;
    }
  }
}
</style>
