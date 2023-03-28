function pyramid(str, height) {
  const midpoint = Math.floor((2 * height - 1) / 2);
  let output = "";
  
  for (let row = 0; row < height; row++) {
    let level = "";

    for (let column = 0; column < 2 * height - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += str;
      } else {
        level += " ";
      }
    }

    output += level;

    if (row !== height - 1) {
      output += "\n";
    }
  }

  return output;
}

console.log(pyramid("#", 4));