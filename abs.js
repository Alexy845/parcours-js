function isPositive(number) {
    if (number = 0) {
        return false;
    } else if (number > 0) {
        return true;
    } else {
        return false;
    }
}

function abs (x) {
  return isPositive(x) ? x : -x;
}
