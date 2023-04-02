function citiesOnly(arr) {
  return arr.map(function (item) {
    return item.city;
  });
}


const upperCasingStates = arr => arr.map(item => item.replace(/\b\w/g, letter => letter.toUpperCase()));
