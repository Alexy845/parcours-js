function pronoun(text) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words = text.toLowerCase().replace(/[\n,]/g, ' ').split(' ');
    const counts = pronouns.reduce((acc, pronoun) => ({ ...acc, [pronoun]: { count: 0, word: [] } }), {});
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (pronouns.includes(word)) {
        counts[word].count++;
        if (!counts[word].word.includes(words[i + 1])) {
          counts[word].word.push(words[i + 1]);
        }
      }
    }
    return counts;
  }
  