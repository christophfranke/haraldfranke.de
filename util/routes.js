import Api from './api'
import linkResolver from './linkResolver'


export default () => Api()
  .then(api => api.query('', { pageSize : 100 }))
  .then(content => content.results.filter(doc => doc.type === 'page'))
  .then(pages => pages.map(page => linkResolver(page)))