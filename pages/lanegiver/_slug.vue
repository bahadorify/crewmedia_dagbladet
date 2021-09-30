<template>
  <div>
    <bank-hero :bank="bank" />
    <loan-info :bank="bank" />
    <bank-body :bank="bank" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      titleTemplate: `${this.bank.name} - Les vår evaluering | %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `Er ${this.bank.name} til å stole på? Les vår evaluering.`,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: `${this.bank.name}, evaluering`,
        },
      ],
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: this.schemaScript ? this.schemaScript : '',
          type: 'application/ld+json',
        },
      ],
    }
  },
  data() {
    return {
      bank: {},
    }
  },
  async asyncData({ $content, route, error }) {
    try {
      //fetch the bank
      const bankArr = await $content('loan-providers')
        .where({
          path: { $contains: route.params.slug },
        })
        .fetch()
      // find the bank that exactly matches the slug
      const bank = bankArr.find((b) => {
        return b.path === '/loan-providers/' + route.params.slug
      })
      // console.log(bank)
      if (!bank) {
        throw new Error('Cannot find bank!')
      }
      return {
        bank,
      }
    } catch (e) {
      console.error(e)
      error({ statusCode: 404, message: 'Bank not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
</style>
