const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}

const flatMap = (arr, callback) => {
    return arr.reduce((acc, curr) => {
      return acc.concat(callback(curr));
    }, []);
  }