export default {
  head: {
    meta: [{
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }],
    script: [{
      src: '/endpoint.js'
    }, {
      src: 'https://static.cdn.prismic.io/prismic.min.js'
    }],
  },
  css: [
    'vue-pure-lightbox/dist/VuePureLightbox.css',
  ],
  generate: {
    routes: !process.env.NOW_DEPLOYMENT && require('./util/routes').default
  }
}