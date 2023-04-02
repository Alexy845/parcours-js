function dayOfTheYear(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInMs = date.getTime() - startOfYear.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays + 1;
  }
  