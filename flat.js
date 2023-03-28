function flat(arr, depth = 1) {
    if (!Array.isArray(arr)) {
      return [arr];
    }
  
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (Array.isArray(element) && depth > 0) {
        result.push(...flat(element, depth - 1));
      } else {
        result.push(element);
      }
    }
  
    return result;
  }
  