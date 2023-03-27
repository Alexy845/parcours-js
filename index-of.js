function indexOf(arr, val, startIndex = 0) {
    for (let i = startIndex; i < arr.length; i++) {
      if (arr[i] === val) {
        return i;
      }
    }
    return -1;
  }
  
  console.log(indexOf(['t', '0', '0', 't'], 't', 1));
  