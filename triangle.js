function triangle(str, height) {
    let output = "";
    for (let i = 1; i <= height; i++) {
        output += str.repeat(i) + "\n";
    }
    return output;
}
console.log(triangle('#', 4));