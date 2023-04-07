function pronoun(str) {
  const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
  const words = str.split(/\s+/);
  const result = {};
  let currentPronoun;

  words.forEach((word, index) => {
    if (pronouns.includes(word.toLowerCase())) {
      currentPronoun = word.toLowerCase();
      if (!result[currentPronoun]) {
        let nextWordIndex = index + 1;
        let nextWord = words[nextWordIndex] || '';
        while (pronouns.includes(nextWord.toLowerCase())) {
          nextWordIndex++;
          nextWord = words[nextWordIndex] || '';
        }
        result[currentPronoun] = { word: [nextWord], count: 1 };
      }
      else {
        let nextWordIndex = index + 1;
        let nextWord = words[nextWordIndex] || '';
        while (pronouns.includes(nextWord.toLowerCase())) {
          nextWordIndex++;
          nextWord = words[nextWordIndex] || '';
        }
        result[currentPronoun].count++;
        result[currentPronoun].word.push(nextWord);
      }
    }
  });

  return result;
}
