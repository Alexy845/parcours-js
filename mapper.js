const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}
function flatMap(arr, fn) {
    return arr.reduce((result, val) => {
      const items = fn(val);
      if (items != null) {
        if (Array.isArray(items)) {
          result.push(...items);
        } else {
          result.push([items]);
        }
      }
      return result;
    }, []);
  }
  
  
  