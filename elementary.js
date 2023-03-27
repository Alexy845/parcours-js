function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    if (a === 1) {
        return b;
    }
    if (a < 0) {
        return -b + multiply(a + 1, b);
    }
    return b + multiply(a - 1, b);

}

function divide (a, b) {
    if (a === b) {
        return 1;
    }
    if (a < 0) {
        return -b + divide(a + b, b);
    }
    if (a < b) {
        return 0;
    }
    if (b < 0) {
        return -a + divide(a, b + a);
    }
    if (a > b) {
        return 1 + divide(a - b, b);
    }

    return 1 + divide(a - b, b);
}

function modulo (a, b) {
  return a % b;
}


console.log(divide(123, -22))