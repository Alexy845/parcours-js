function letterSpaceNumber(str) {
    const regex = /[a-zA-Z]\s\d(?![a-zA-Z])/gi;
    const matches = str.match(regex);
    if (matches) {
      return matches;
    } else {
      return [];
    }
  }
  