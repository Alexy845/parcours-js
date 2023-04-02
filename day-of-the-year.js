function dayOfTheYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInMilliseconds = date.getTime() - startOfYear.getTime();
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.ceil(diffInDays);
  }
  
console.log(dayOfTheYear(new Date('0001-01-01')));

