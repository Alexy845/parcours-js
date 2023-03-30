function vowelDots(str) {
    const vowels = /[aeiou]/ig;
    return str.replace(vowels, (match) => match + '.');
  }

console.log(vowelDots('Hello World!'));