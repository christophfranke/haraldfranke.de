export default {
  head: {
    script: [{
      src: '/endpoint.js'
    }, {
      src: 'https://static.cdn.prismic.io/prismic.min.js'
    }]
  },
  css: [
    'vue-pure-lightbox/dist/VuePureLightbox.css',
    './fonts.css'
  ],
}