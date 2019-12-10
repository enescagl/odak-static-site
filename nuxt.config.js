
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s - Odak İş Makinaları',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Odak İş Makinaları Websitesi' },
      {
        property: 'og:title',
        content: 'Odak Makina',
        // following template options are identical
        // template: '%s - My page',
        template: chunk => `${chunk} - Odak İş Makinaları`,
        vmid: 'og:title'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'tr',
    locales: [
      { 'code': 'tr', 'name': 'Türkçe' },
      { 'code': 'en', 'name': 'English' }],
    vueI18n: {
      fallbackLocale: 'tr'
    },
    vueI18nLoader: true,
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  router: { middleware: "redirect" },


  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
    extractCSS: true
  }
}
