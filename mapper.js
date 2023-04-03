const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, fn) {
    return arr.reduce((acc, val) => {
      return acc.concat(fn(val));
    }, []);
  }
  