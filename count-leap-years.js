function countLeapYears(date) {
    let count = 0;
    for (let i = 0; i < date; i++) {
      if (i % 4 === 0) {
        count++;
      }
    }
    return count;
}
  