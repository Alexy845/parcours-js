function pyramid(str, height) {
  let output = "";
  let width = height * 2 - 1;
  let midpoint = Math.floor(width / 2);
  for (let row = 0; row < height; row++) {
    let line = "";
    for (let col = 0; col < width; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        line += str;
      } else {
        line += " ";
      }
    }
    let padding = " ".repeat((width - line.trim().length) / 2);
    output += padding + line.trimRight() + "\n";
  }
  return output.trim();
}
