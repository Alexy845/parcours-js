function citiesOnly(arr) {
  return arr.map(function (item) {
    return item.city;
  });
}
function upperCasingStates(arr) {
    return arr.map(function(item) {
      if (item && item.state) {
        return item.state.charAt(0).toUpperCase() + item.state.slice(1);
      } else {
        return "";
      }
    });
  }
  