function isPositive(number) {
    if (number = 0) {
        return false;
    }
  return number >= 1;

}

function abs (x) {
  return isPositive(x) ? x : -x;
}
