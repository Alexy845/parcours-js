function pyramid(str, height) {
  let output = "";
  const strWidth = str.length;

  for (let i = 1; i <= height; i++) {
    const spaces = " ".repeat((height - i)*strWidth);
    const elements = str.repeat(i * 2 + 1);
    const line = spaces + elements;

    output += line;

    if (i < height - 1) {
      output += "\n";
    }
  }

  return output;
}

console.log(pyramid("#", 4));