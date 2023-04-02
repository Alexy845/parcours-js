// function citiesOnly(arr) {
//   return arr.map(function (item) {
//     return item.city;
//   });
// }
// function upperCasingStates(arr) {
//     return arr.map(function (item) {
//       return item.replace(/\b\w/g, function (match) {
//         return match.toUpperCase();
//       });
//     });
// }

// function citiesOnly(array) {
//     return array.map(cityobj => cityobj.city);
// }

// function upperCasingStates(array) {
//     return array.map(state => {
//         return state.replace(/\b\w/g, letter => letter.toUpperCase());
//     });
// }
const citiesOnly = arr => arr.map(item => item.city);
const upperCasingStates = arr => arr.map(item => item.replace(/\b\w/g, letter => letter.toUpperCase()));

const fahrenheitToCelsius = arr => {
    return arr.map(item => {
      const temp = parseFloat(item);
      if (!isNaN(temp)) {
        return Math.round((temp - 32) * 5 / 9) + '°C';
      } else {
        return 'Invalid temperature';
      }
    });
  };
  

  