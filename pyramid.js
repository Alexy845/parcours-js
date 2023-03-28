function pyramid(str, height) {
  const strWidth = str.length;
  const maxWidth = 2 * strWidth * height - strWidth;
  let output = "";

  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat((maxWidth - (2 * strWidth * i - strWidth)) / 2);
    const level = str.repeat(i);
    output += spaces + level + spaces;
    if (i !== height) {
      output += "\n";
    }
  }
  return output;
}

console.log(pyramid("#", 4));