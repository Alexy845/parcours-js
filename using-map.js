function citiesOnly(arr) {
  return arr.map(function (item) {
    return item.city;
  });
}

function upperCasingStates(arr) {
    return arr.map(function(item) {
      return item.split(' ')
                 .map(function(word) {
                   return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
                 })
                 .join(' ');
    });
  }
  