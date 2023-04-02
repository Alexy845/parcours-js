const filterShortStateName = (states) => {
  return states.filter(state => state.length < 7);
}

const filterStartVowel = (states) => {
  return states.filter(state => /^[aeiou]/i.test(state));
}

const filter5Vowels = (states) => {
  return states.filter(state => state.match(/[aeiou]/gi).length === 5);
}

const filter1DistinctVowel = (states) => {
  return states.filter(state => {
    const vowels = state.match(/[aeiou]/gi);
    const distinctVowels = new Set(vowels);
    return distinctVowels.size === 1;
  });
}

const multiFilter = (states) => {
  return states.filter(state => {
    const vowels = state.match(/[aeiou]/gi);
    const distinctVowels = new Set(vowels);
    return distinctVowels.size === 1 && state.length > 7;
  });
}