const Prismic = require('prismic-javascript')
const fs = require('fs')

const apiEndpoint = 'https://nuaflow-de.cdn.prismic.io/api/v2'
const targetFile = `${__dirname}/cms-data.js`
 
Prismic.getApi(apiEndpoint)
  .then(api => api.query('', { pageSize : 100 }))
  .then(response => {
    if (response.total_pages > 1) {
      console.error('There are more results than fit into first response page. This will lead to missing cms data. Do another api request for the next page to fix this.')
    }
    return new Promise(resolve => {
      fs.writeFile(targetFile, 'export default ' + JSON.stringify(response.results), () => resolve())
    })
  }).then(() => {
    console.log(`successfully written cms data to ${targetFile}`)
  })
