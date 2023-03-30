function sameAmount(str, regExp1, regExp2) {
    const matches1 = str.match(regExp1);
    const matches2 = str.match(regExp2);
  
    if (matches1 === null || matches2 === null || matches1.length !== matches2.length) {
        return false;
    }
    for (let i = 0; i < matches1.length; i++) {
        if (matches1[i].trim() !== matches2[i].trim()) {
            return false;
        }
    }
  
    return true;
}
  