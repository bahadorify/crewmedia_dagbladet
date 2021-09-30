<template>
  <div class="wrapper" @click="handleClick()">
    <div class="youtube">
      <div v-if="!isClicked" class="thumbnail">
        <img :src="`//i.ytimg.com/vi/${id}/hqdefault.jpg`" />
        <div class="play-btn"></div>
      </div>
      <div v-else class="video">
        <iframe
          :src="`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`"
          frameborder="0"
          allowfullscreen="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { id: String },
  data() {
    return { isClicked: false }
  },
  methods: {
    handleClick() {
      this.isClicked = true
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 480px;
  margin: 30px auto;
}
.youtube {
  position: relative;
  padding-bottom: 55%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  margin: 5px;
  img {
    object-fit: cover;
    display: block;
    left: 0;
    bottom: 0;
    margin: auto;
    max-width: 100%;
    width: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: none;
    height: auto;
    cursor: pointer;
    transition: 0.4s all;
    &:hover {
      filter: brightness(75%);
    }
  }
  .play-btn {
    height: 72px;
    width: 72px;
    left: 50%;
    top: 50%;
    margin-left: -36px;
    margin-top: -36px;
    position: absolute;
    background: url('//i.imgur.com/TxzC70f.png') no-repeat;
    cursor: pointer;
  }
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: transparent;
  }
}
</style>
