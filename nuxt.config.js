module.exports = {
  /*
  ** Build configuration
  */
  build: {},
  /*
  ** Headers
  ** Common headers are already provided by @nuxtjs/pwa preset
  */
  head: {},
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Customize app manifest
  */
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  workbox: {
    
  },
  plugins: [
    {
      src: '~/plugins/scrollable.js',
      ssr: true
    },
    {
      src: '~/plugins/swiper.js',
      ssr: false
    }
  ],
  css: [
    'swiper/dist/css/swiper.css'
  ]
}
