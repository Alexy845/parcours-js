function countLeapYears(date) {
    const year = date.getFullYear();
    let count = 0;
    for (let i = 1; i <= year; i++) {
      if (i % 4 === 0 && (i % 100 !== 0 || i % 400 === 0)) {
        count++;
      }
    }
    const numLeapYearsBeforeYearOne = Math.floor(year / 4) - Math.floor(year / 100) + Math.floor(year / 400);
    count -= numLeapYearsBeforeYearOne;
    if ((1 - year) % 4 === 0 && ((1 - year) % 100 !== 0 || (1 - year) % 400 === 0)) {
      count++;
    }
    return count;
}
  