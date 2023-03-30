const vowels = /[aeiou]/ig;

function vowelDots(str) {
    return str.replace(vowels, "$&.")
  }

console.log(vowelDots('Hello World!'));