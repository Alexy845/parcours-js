function pyramid(str, height) {
  const midpoint = Math.floor((2 * height - 1) / 2);
  let output = "";
  for (let i = 0; i < height; i++) {
    let level = "";
    for (let j = 0; j < 2 * height - 1; j++) {
      if (midpoint - i <= j && midpoint + i >= j) {
        level += str;
      } else {
        level += " ";
      }
    }
    output += level;
    if (i < height - 1) {
      output += "\n";
    }
  }
  return output;
}
