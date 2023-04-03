const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, func) {
    return arr.reduce((acc, curr) => {
      const mapped = func(curr);
      return Array.isArray(mapped) ? acc.concat(mapped) : acc.concat([mapped]);
    }, []);
  }
  
  