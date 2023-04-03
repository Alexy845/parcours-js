const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const mapp = func(array[i], i, array);
        if (Array.isArray(mapp)) {
            result.push(...mapp);
        } else {
            result.push(mapp);
        }
    }
    return result;
}
  
  