const longWords = (arr) => {    
    return arr.reduce((acc, curr) => {
      if (curr.length > 6) {
        acc.push(curr);
      }
      return acc;
    }, []);
  }