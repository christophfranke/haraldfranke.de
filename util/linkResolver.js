const resolve = doc => ({
  page: `/${doc.uid}`,
  home: '/',
  shop: '/meister-eckart-shop',
  site_navigation: '/'
})[doc.type]

export default doc => {
  console.log('resolved to', resolve(doc))
  return resolve(doc)
}