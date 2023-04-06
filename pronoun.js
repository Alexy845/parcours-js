function pronoun(str) {
    const words = str.split(/\s+/); // regex pattern to split words by space or new lines
    const pronouns = {
        i: { word: [], count: 0 },
        you: { word: [], count: 0 },
        he: { word: [], count: 0 },
        she: { word: [], count: 0 },
        it: { word: [], count: 0 },
        they: { word: [], count: 0 },
        we: { word: [], count: 0 },
    };
    let prevPronoun = null;
    for (let word of words) {
        const normalizedWord = word.replace(/[\,\.\?\!]/g, '').toLowerCase();
        if (pronouns.hasOwnProperty(normalizedWord)) {
            prevPronoun = normalizedWord;
            pronouns[normalizedWord].count++;
        } else if (prevPronoun !== null) {
            pronouns[prevPronoun].word.push(word);
        }
    }
    return Object.fromEntries(
        Object.entries(pronouns).filter(([_, v]) => v.count > 0)
    );
}
