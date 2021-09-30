<template>
  <div class="bank-accordion-wrapper">
    <h1>Om {{ bank.name }}</h1>
    <new-accordion
      v-for="(item, idx) in faq"
      :key="idx"
      :faq="item"
      :open="idx === 0"
    />
    <div v-if="!faq.length" style="margin: 25px">
      <a :href="getUrl(bank.affiliate)" class="btn-grey">Les mer</a>
    </div>
  </div>
</template>

<script>
import BaseUrl from '~/mixins/baseUrl.js'

export default {
  mixins: [BaseUrl],
  props: ['bank'],
  data() {
    return {
      faq: [],
    }
  },
  mounted() {
    console.log('MOUNTED!')
    try {
      const { children } = this.bank.body
      let idx = 0
      const length = children.length
      // Look for h2 tags inside the body of bank
      // and turn them into questions
      // turn everything else before next h2 tag to answers
      console.log()
      while (idx < length) {
        const child = children[idx]
        if (child.type === 'element' && child.tag === 'h2') {
          const q = {
            body: {
              children: [child],
            },
          }
          const a = {
            body: {
              children: [],
            },
          }
          idx++
          while (
            idx < length &&
            (children[idx].type !== 'element' || children[idx].tag !== 'h2')
          ) {
            a.body.children.push(children[idx])
            idx++
          }
          this.faq.push({ q, a })
        } else {
          idx++
        }
      }
    } catch (error) {
      console.error('MY ERRROR', error)
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/_variables.scss';
h1 {
  font-size: 22px;
  margin: 24px 0 0 25px;
}
</style>
