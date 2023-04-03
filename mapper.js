const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, fn) {
    const result = [];
    for (const val of arr) {
      const items = fn(val);
      if (items != null) {
        for (const item of items) {
          result.push(item);
        }
      }
    }
    return result;
  }
  
  