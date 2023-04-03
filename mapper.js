const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, fn) {
    return arr.reduce((acc, val, i) => {
      const result = fn(val, i);
      if (result != null) {
        return acc.concat(result);
      } else {
        return acc;
      }
    }, []);
  }
  