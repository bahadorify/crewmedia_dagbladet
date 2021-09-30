<template>
 <span> {{ numberOfBanks }} </span> 
</template>

<script>
export default {
  data () {
    return {
      numberOfBanks: process.env.numberOfBanks,
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
