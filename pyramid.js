function pyramid(str, height) {
  const strWidth = str.length;
  let output = "";

  for (let i = 0; i < height; i++) {
    let level = "";
    const numOfChars = 2 * i + 1;
    const numOfSpaces = (2 * height - 1 - numOfChars) / 2;

    level += " ".repeat(numOfSpaces * strWidth);

    for (let j = 0; j < numOfChars; j++) {
      level += str;
      if (j !== numOfChars - 1) {
        level += " ";
      }
    }

    output += level;
    if (i !== height - 1) {
      output += "\n";
    }
  }

  return output;
}

console.log(pyramid("#", 4));