import Prismic from 'prismic-javascript'

const apiEndpoint = 'https://haraldfranke-de.cdn.prismic.io/api/v2'
export default options => Prismic.getApi(apiEndpoint, options)
