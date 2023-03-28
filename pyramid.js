function pyramid(str, height) {
  let output = "";
  for (let i = 0; i < height; i++) {
    const spaces = " ".repeat(height - i - 1);
    const elements = str.repeat(i * 2 + 1).slice(0, i * 2 + 1);
    const line = spaces + elements;

    output += line;

    if (i < height - 1) {
      output += "\n";
    }
  }

  return output;
}
console.log(pyramid("#", 4));