function pronoun(text) {
    const pronounCounts = { it: { word: [], count: 0 }, he: { word: [], count: 0 }, she: { word: [], count: 0 }, they: { word: [], count: 0 }, we: { word: [], count: 0 }, you: { word: [], count: 0 }, i: { word: [], count: 0 } };
  
    const words = text.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const pronoun = pronounCounts[word.toLowerCase()];
      if (pronoun) {
        pronoun.word.push(word);
        pronoun.count++;
        // if the next word is also a pronoun, skip it
        if (i < words.length - 1 && pronounCounts[words[i+1].toLowerCase()]) {
          i++;
        }
      }
    }
  
    return pronounCounts;
  }
  