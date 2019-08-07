import Api from './util/api'
import linkResolver from './util/linkResolver'


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
    routes: () => Api()
      .then(api => api.query('', { pageSize : 100 }))
      .then(content => content.results.filter(doc => doc.type === 'page'))
      .then(pages => pages.map(page => linkResolver(page)))
  }
}