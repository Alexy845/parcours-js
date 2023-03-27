function indexOf (str, x) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === x) {
      return i;
    }
  }
  return -1;
}