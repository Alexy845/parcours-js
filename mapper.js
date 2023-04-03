const map = (arr, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
    }
    return result;
}

function flatMap(arr, func) {
    return arr.reduce((acc, curr, index) => {
      const result = func(curr);
      if (result !== undefined) {
        if (Array.isArray(result)) {
          acc.push(...result.map((value) => `${index}: ${value}`));
        } else {
          acc.push(`${index}: ${result}`);
        }
      }
      return acc;
    }, []);
  }
  