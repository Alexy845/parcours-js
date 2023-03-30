function sameAmount(str, regExp1, regExp2) {
  const matches1 = str.match(regExp1.global);
  const matches2 = str.match(regExp2.global);

  return matches1 !== null && matches2 !== null && matches1.length === matches2.length;
}
