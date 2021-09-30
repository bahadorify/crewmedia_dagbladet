export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Dagbladet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      {
        name: 'ahrefs-site-verification',
        content:
          '4f7bd7c9ee7d32178e90062b8c236ca812a09029e8ae2b547bb3a124ff62d216',
      },
      {
        name: 'google-site-verification',
        content: 'heUc86OEC4IKX1H37fb25jliPw1ovrKIBupgRQnELUM',
      },
      //noindex for staging env
      {
        hid: 'robots',
        name: 'robots',
        content: process.env.NOINDEX ? 'noindex, nofollow' : 'all',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: `/${process.env.BASE}/favicon.ico`,
      },
      // {
      //   rel: 'stylesheet',
      //   href:
      //     'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;900&display=swap',
      // },
    ],
    script: [
      {
        id: 'am-scripts',
        src: 'https://am.medialaben.no/scripts/app.min.js',
        async: true,
        body: true,
      },
    ],
  },
  /*
   ** Global CSS
   */

  css: ['@/assets/sass/app.scss'],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~plugins/webfont.js', ssr: false }],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-lazy-load',
    '@nuxtjs/markdownit',
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    apiPrefix: `${process.env.BASE}/_content`,
    dir: `content/${process.env.BASE}`,
  },
  /**
   * markdownit options
   * See https://github.com/markdown-it/markdown-it
   */
  markdownit: {
    // preset: 'default',
    // linkify: true,
    // breaks: true,
    runtime: true,
    // use: ['markdown-it-div', 'markdown-it-attrs'],
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    publicPath: '/_nuxt/',
    extractCSS: true,
    loaders: {
      scss: {
        additionalData: `$rootDir: /${process.env.BASE};`,
      },
    },
  },
  generate: {
    fallback: true,
    exclude: [
      /^\/meninger/,
      /^\/tema/,
      /^\/pluss/,
      /^\/kjendis/,
      /^\/reise/,
      /^\/eavis/,
      /^\/kultur/,
      /^\/anmeldelser/,
      /^\/fotballstudio/,
      /^\/om-pluss/,
      /^\/mat/,
      /^\/video/,
      /^\/oddstips/,
      /^\/kurs/,
      /^\/shopping/,
      /^\/(?!tjeneste)/,
    ],
  },
  /**
   * Environment vars
   */
  env: {
    baseUrl: `/${process.env.BASE}`,
    numberOfBanks: 22,
  },
  router: {
    base: `/${process.env.BASE}/`,
    // using 'flase' here will prevent base route from working
    // trailingSlash: false,
    // scrollBehavior(to) {
    //   const offset = window.innerWidth > 640 ? 635 : 470
    //   if (to.hash) {
    //     const el = document.querySelector(to.hash)
    //     console.log(el.offsetTop)
    //     return window.scrollTo({
    //       // TODO: el is not defined when navigating
    //       // from one page to another page's #
    //       top: el ? el.offsetTop + offset : 0,
    //       behavior: 'smooth',
    //     })
    //   }
    //   return window.scrollTo({ top: 0 })
    // },
  },
  serverMiddleware: [
    '@/api/index.js',
    '@/servermiddleware/trailingSlash.js',
    '@/servermiddleware/redirect.js',
  ],
}
