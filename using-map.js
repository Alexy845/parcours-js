function citiesOnly(arr) {
  return arr.map(function (item) {
    return item.city;
  });
}

function upperCasingStates(arr) {
    return arr.map(function (item) {
      return item.replace(/\b\w/g, function (match) {
        return match.toUpperCase();
      });
    });
  }
  