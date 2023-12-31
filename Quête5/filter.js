const filter = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }

const reject = (arr, fn) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!fn(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }

const partition = (arr, fn) => {
    const result = [[], []];
    for (let i = 0; i < arr.length; i++) {
      if (fn(arr[i], i, arr)) {
        result[0].push(arr[i]);
      } else {
        result[1].push(arr[i]);
      }
    }
    return result;
  }
