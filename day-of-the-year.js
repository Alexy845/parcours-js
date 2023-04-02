function dayOfTheYear(date) {
  const startOfYear = new Date(date.getFullYear(), 0, 1);
  const isLeapYear = ((date.getFullYear() % 4 === 0) && (date.getFullYear() % 100 !== 0)) || (date.getFullYear() % 400 === 0);
  const diffInMs = date.getTime() - startOfYear.getTime();
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  return diffInDays + 1 + (isLeapYear && date.getMonth() > 1 ? 1 : 0);
}
