function pronoun(str) {
    const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we'];
    const words = str.split(/\s+/);
    const result = {};
    let currentPronoun;

    words.forEach((word, index) => {
        if (pronouns.includes(word.toLowerCase())) {
            currentPronoun = word.toLowerCase();
            if (!result[currentPronoun]) {
                result[currentPronoun] = { word: [], count: 0 };
            }
        } else if (currentPronoun !== undefined) {
            if (word[word.length - 1] === ',') {
                word = word.slice(0, word.length - 1);
            }
            result[currentPronoun].word.push(word);
        }
    });

    Object.keys(result).forEach((key) => {
        result[key].count = result[key].word.length;
    });

    return result;
}
