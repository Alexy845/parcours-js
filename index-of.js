function indexOf(arr, val, i = 0) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] === val) {
        return j;
      }
    }
    return -1;
  }

console.log(indexOf([t, 0, 0, t], t, 1));