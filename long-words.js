const longWords = (arr) => {
    return arr.every((elem) => typeof elem === 'string' && elem.length >= 5);
  };
  