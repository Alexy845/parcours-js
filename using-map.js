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

function fahrenheitToCelsius(temps) {
    const result = temps.map((temp) => {
      const celsius = Math.floor((parseInt(temp) - 32) * 5/9);
      return celsius.toString() + '°C';
    });
    return result;
  }
  

  