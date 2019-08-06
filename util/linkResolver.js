const resolve = doc => ({
  page: `/${doc.uid}`,
  home: '/'
})[doc.type]

export default doc => {
  console.log('resolved to', resolve(doc))
  return resolve(doc)
}