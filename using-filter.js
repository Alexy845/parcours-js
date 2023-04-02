const filterShortStateName = (states) => {
  return states.filter(state => state.length < 7);
}

const filterStartVowel = (states) => {
  return states.filter(state => /^[aeiou]/i.test(state));
}

const filter5Vowels = (states) => {
    return states.filter(state => (state.match(/[aeiou]/gi)?.length ?? 0) >= 5); 
}
  
function filter1DistinctVowel(states) {
    return states.filter((state) => {
      const vowels = new Set(state.toLowerCase().match(/[aeiou]/g));
      return vowels.size === 1 && state.match(/[aeiou]/gi).length > 1;
    });
  }
  
  
const multiFilter = (states) => {
  return states.filter(state => {
    const vowels = state.match(/[aeiou]/gi);
    const distinctVowels = new Set(vowels);
    return distinctVowels.size === 1 && state.length > 7;
  });
}