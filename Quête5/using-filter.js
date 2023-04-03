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
  
  
  function multiFilter(states) {
    return states.filter((state) => {

      if (state.capital.length < 8) {
        return false;
      }
      
      const firstLetter = state.name[0].toLowerCase();
      if (['a', 'e', 'i', 'o', 'u'].includes(firstLetter)) {
        return false;
      }
      
      if (!state.tag.match(/[aeiou]/gi)) {
        return false;
      }
      
      if (state.region === "South") {
        return false;
      }
      
      return true;
    });
  }

