const filterShortStateName = (states) => {
  return states.filter(state => state.length < 7);
}

const filterStartVowel = (states) => {
  return states.filter(state => /^[aeiou]/i.test(state));
}
