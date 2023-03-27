function multiply(a, b) {
    if (a === 0 || b === 0) {
    return 0;
  }
     if (a === 1) {
    return b;
  }
    return b + multiply(a - 1, b);

}

function divide (a, b) {
    if (a === 0 || b === 0) {
        return 0;
      }
      if (a === 1) {
        return b;
      }
      return a + repeat(b, a - 1);
}

function modulo (a, b) {
  return a % b;
}
