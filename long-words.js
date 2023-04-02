const longWords = (arr) => {
    return arr.every((elem) => typeof elem === 'string' && elem.length >= 5);
  };

  const oneLongWord = (arr) => {
    return arr.some((elem) => typeof elem === 'string' && elem.length >= 10);
  };

  const noLongWords = (arr) => {
    return arr.some((elem) => typeof elem === 'string' && elem.length <= 7 )
  }