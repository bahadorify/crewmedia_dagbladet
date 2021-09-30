export default {
  head() {
    return {
      titleTemplate: `${this.title} | %s`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.keywords,
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
      articleArr: [],
      latestArticles: [],
      title: '',
      description: '',
      keywords: '',
      affiliate: '',
      schemaScript: '',
      category: '',
    }
  },
}
