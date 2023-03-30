function letterSpaceNumber(str) {
    const regex = /[a-z]\s\d(?![a-z0-9])/gi;
    const matches = str.match(regex);
    if (matches) {
      return matches;
    } else {
      return [];
    }
  }


console.log(letterSpaceNumber('He is 8 or 9 years old, not 10.'))