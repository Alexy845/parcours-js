const adder = (arr, start = 0) => {
    return arr.reduce((acc, curr) => {
      return acc + curr;
    }, start);
  };

const sumOrMul = (arr, start = 0) => { 
    return arr.reduce((acc, curr) => {
      if (curr % 2 === 0) {
        return acc * curr;
      } else {
        return acc + curr;
      }
    }, start);
  };

  const funcExec = (arr, start = 0) => {
    return arr.reduce((acc, curr) => {
      return curr(acc);
    }, start);
  }
  