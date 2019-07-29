import Vue from 'vue'
import Vuex from 'vuex'
import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://haraldfranke-de.cdn.prismic.io/api/v2'


export default () => new Vuex.Store({
  getters: {
    content: ({ content }) => content,
    home: (state, { content }) => content.find(doc => doc.type === 'home').data,
    slices: (state, { home }) => home.body,
    navEntries: (state, { slices }) => slices
      .map(slice => slice.primary)
      .filter(primary => primary.menu)
      .map(primary => primary.menu)
  },
  state: {
    content: {}
  },
  actions: {    
    nuxtServerInit({ state }) {
      return Prismic.getApi(apiEndpoint)
        .then(api => api.query('', { pageSize : 100 }))
        .then(response => {
          if (response.total_pages > 1) {
            console.error('There are more results than fit into first response page. This will lead to missing cms data. Do another api request for the next page to fix this.')
          }
          return response.results
        }).then(content => {
          Vue.set(state, 'content', content)
        })
    },
  }
})