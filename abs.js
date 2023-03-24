function isPositive(number) {
    if (number >= 1) {
        return true;
    }
}

function abs (x) {
  return isPositive(x) ? x : -x;
}
