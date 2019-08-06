export default s =>
  (s && s.replace(/ /g, '-').toLowerCase()) || 'full-width'