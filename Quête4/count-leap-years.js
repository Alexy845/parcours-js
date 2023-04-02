function countLeapYears(date) {
    let count = -1;
    for (let year = 0; year < date.getFullYear(); year++) {
      if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        count++;
      }
    }
    return count;
}
  