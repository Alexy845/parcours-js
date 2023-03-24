function sign (x) {
  if (x > 0) {
    return 1
  } else if (x < 0) {
    return -1
  } else {
    return 0
  }
}

function sameSign(x,y) {
    if (x === 0 || y === 0){
     return false;
    }
    return (x >= 0 && y >= 0) || (x < 0 && y < 0);
}