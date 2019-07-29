import Vue from 'vue'
import Vuex from 'vuex'

import content from '../cms-data'

export default () => new Vuex.Store({
  getters: {
    content: ({ content }) => content,
    home: (state, { content }) => content.find(doc => doc.type === 'home').data,
    slices: (state, { home }) => home.body
  },
  state: {
    content
  },
  actions: {    
    nuxtServerInit({ state }) {
      Vue.set(state, 'content', content)
    },
  }
})