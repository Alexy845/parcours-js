function dayOfTheYear(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const startOfYear = new Date(year, 0, 1);
    const diffInMilliseconds = date.getTime() - startOfYear.getTime();
    const diffInDays = diffInMilliseconds / (1000 * 60 * 60 * 24);
    return Math.ceil(diffInDays);
  }
  
console.log(dayOfTheYear(new Date('0001-01-01')));

