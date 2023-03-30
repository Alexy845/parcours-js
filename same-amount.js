function sameAmount(str, regExp1, regExp2) {
    const matches1 = str.match(regExp1);
    const matches2 = str.match(regExp2);

    if (regExp1.global === false ) {
        regExp1 = new RegExp(regExp1.source, regExp1.flags + 'g');
    }
    if (regExp2.global === false ) {
        regExp2 = new RegExp(regExp2.source, regExp2.flags + 'g');
    }
    return matches1 !== null && matches2 !== null && matches1.length === matches2.length;
}
