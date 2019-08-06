export default doc => ({
  page: `/${doc.uid}`,
  home: '/',
  shop: '/meister-eckart-shop',
  site_navigation: '/'
})[doc.type]
