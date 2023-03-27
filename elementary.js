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
    if (a === 0) {
        return 0;
    }
    if (a < 0 && b < 0) {
        a = -a;
        b = -b;
    }
    if (a < 0) {
        return -divide(-a, b);
    }
    if (b < 0) {
        return -divide(a, -b);
    }
    if (a < b) {
        return 0;
    }
    return 1 + divide(a - b, b);
}

function modulo (a, b) {
    if (a === 0) {
        return 0;
    }
    if (a < 0 && b < 0) {
        a = -a;
        b = -b;
    }
    if (a < 0) {
        return -modulo(-a, b);
    }
    if (b < 0) {
        return modulo(a, -b);
    }
    if (a < b) {
        return a;
    }
    return modulo(a - b, b);
}


console.log(modulo(123, -22))