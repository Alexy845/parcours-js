function filterValues(obj, fn) {
  const result = {};
  for (const key in obj) {
    if (fn(obj[key])) {
      result[key] = obj[key];
    }
  }
  return result;
}

function mapValues(obj, fn) {
  const result = {};
  for (const key in obj) {
    result[key] = fn(obj[key]);
  }
  return result;
}

function reduceValues(obj, fn, acc) {
    let result = acc;
    for (const key in obj) {
        result = fn(result, obj[key]);
    }
    return result;
    }