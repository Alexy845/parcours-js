function vowelDots(str) {
    const vowels = /[aeiou]/ig;
    return str.replace(vowels, "$&.")
  }

console.log(vowelDots('Hello World!'));