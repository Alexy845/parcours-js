function triangle(str, height) {
    let output = "";
    for (let i = 1; i <= height; i++) {
      output += str.repeat(i);
      if (i !== height) {
        output += "\n";
      }
    }
    return output;
  }
console.log(triangle('#', 4));