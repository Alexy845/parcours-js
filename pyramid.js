function pyramid(str, height) {
  let output = "";
  const strWidth = str.length;

  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat(height*strWidth - i*strWidth - strWidth);
    const elements = str.repeat(i * 2 + 1).slice(0, i * strWidth * 2 + strWidth);
    const line = spaces + elements;

    output += line;

    if (i < height - 1) {
      output += "\n";
    }
  }

  return output;
}

console.log(pyramid("#", 4));