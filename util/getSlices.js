export default (router, store) => {
  const slug = router.currentRoute.params.page
  return store.getters.page(slug).body
}