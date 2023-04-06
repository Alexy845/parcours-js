function replica(target, source) {
  for (let key in source) {
    if (typeof source[key] === 'object') {
      target[key] = Array.isArray(source[key]) ? [] : {}
      replica(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  }
}