function firstDayWeek(weekNumber, year) {

    if (year < 100 && year >= 0) {
      year += 2000;
    }
    const januaryFirst = new Date(year, 0, 1);
    let daysToAdd = (weekNumber - 1) * 7 - (januaryFirst.getDay() + 6) % 7;
  
    if (year >= 1582) {
      const isLeapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
      if (isLeapYear && weekNumber == 1) {
        daysToAdd -= 3;
      }
    } else if (year < 1582) {
      if (weekNumber == 1) {
        daysToAdd += januaryFirst.getDay() - 1;
      }
    }
  
    const firstDay = new Date(januaryFirst.getTime() + daysToAdd * 86400000);
    const day = ("0" + firstDay.getDate()).slice(-2);
    const month = ("0" + (firstDay.getMonth() + 1)).slice(-2);
    const yearStr = firstDay.getFullYear();
    return `${day}-${month}-${yearStr}`;
  }
  