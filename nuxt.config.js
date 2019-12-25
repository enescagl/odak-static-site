import os from "os";
const baseUrl = process.env.BASE_URL || 'https://www.odakmakina.com'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  env: {
    baseUrl
  },
  head: {
    titleTemplate: '%s - Odak İş Makinaları',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Odak İş Makinaları ' },
      {
        property: 'og:title',
        content: 'Odak Makina',
        // following template options are identical
        // template: '%s - My page',
        template: chunk => `${chunk} - Odak İş Makinaları`,
        vmid: 'og:title'
      },
      {
        property: 'og:description',
        content: 'Odak İş Makinaları Websitesi',
        vmid: 'og:description'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
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
    'nuxt-i18n',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'

  ],
  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://www.odakmakina.com/"
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'tr',
    locales: [
      { 'code': 'tr', 'iso': 'tr-TR', 'name': 'Türkçe' },
      { 'code': 'en', 'iso': 'en-US', 'name': 'English' }],
    vueI18n: {
      fallbackLocale: 'tr'
    },
    vueI18nLoader: true,
  },
  robots: {
    UserAgent: '*',
    Disallow: '/'
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "/.netlify/functions"
  },
  router: { middleware: "redirect" },
  // serverMiddleware: [
  //   { path: '/api', handler: '@/api/contact.js' },
  // ],

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
