function citiesOnly(arr) {
  return arr.map(function (item) {
    return item.city;
  });
}

function upperCasingStates(arr) {
    return arr.map(function (item) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    });
  }
  