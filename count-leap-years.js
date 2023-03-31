function countLeapYears(date) {
    let count = 0;
    for (let i = 0; i < date.getFullYear(); i++) {
      if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        count++;
      }
    }
    return count;
}
  