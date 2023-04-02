const adder = (arr, start = 0) => {
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, start);
  };
  