function letterSpaceNumber(str) {
  return str.replace(/([a-z])([0-9])/gi, "$1 $2");
}