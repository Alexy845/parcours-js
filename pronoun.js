function pronoun(str) {
    const pronouns = {
        i: { word: [], count: 0 },
        you: { word: [], count: 0 },
        he: { word: [], count: 0 },
        she: { word: [], count: 0 },
        it: { word: [], count: 0 },
        they: { word: [], count: 0 },
        we: { word: [], count: 0 },
    };
    const words = str.split(/\s+/);
    for (let i = 0; i < words.length - 1; i++) {
        const word = words[i];
        if (word.toLowerCase() in pronouns) {
            const pronoun = pronouns[word.toLowerCase()];
            const nextWord = words[i + 1];
            if (nextWord) {
                pronoun.word.push(nextWord);
            }
            pronoun.count++;
        }
    }
    return Object.fromEntries(
        Object.entries(pronouns).filter(([_, { count }]) => count > 0)
    );
}
