function sameAmount(str, regExp1, regExp2) {
  const matches1 = str.match(regExp1);
  const matches2 = str.match(regExp2);

  return matches1 !== null && matches2 !== null && matches1.length === matches2.length;
}
