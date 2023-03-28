function get (src, path) {
  return path.split('.').reduce((acc, key) => {
    return acc[key]
  }, src)
}