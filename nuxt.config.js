const pkg = require('./package');
const bodyParser = require('body-parser')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'WD Blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'My cool Web Development Blog',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fa923f', height: '4px', duration: 5000 },
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f',
  },

  /*
   ** Global CSS
   */
  css: ['~assets/styles/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~plugins/core-components.js', '~plugins/date-filter.js'],

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios'],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      'https://nuxt-blog-e1acb-default-rtdb.europe-west1.firebasedatabase.app',
    credentials: false,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  env: {
    baseUrl:
      process.env.BASE_URL ||
      'https://nuxt-blog-e1acb-default-rtdb.europe-west1.firebasedatabase.app',
    fbAPIkey: 'AIzaSyASeXxcL7qz6UkGj_wDH8nqcz1EaiWa7Ls'
  },
  transition: {
    name: 'fade',
    mode: 'out-in',
  },
  // router: {
  //   middleware: 'log'
  // }
  serverMiddleware: [
    bodyParser.json(),
    '~/api'
  ]
};
