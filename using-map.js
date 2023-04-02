function citiesOnly(arr) {
  return arr.map(function (item) {
    return item.city;
  });
}

function upperCasingStates(arr) {
  return arr.map(function (item) {
    return item.toUpperCase();
  });
}