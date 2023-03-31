function firstDayWeek(weekNumber, year) {
    const januaryFirst = new Date(year, 0, 1);
    const dayOfWeekJanuaryFirst = januaryFirst.getDay();
    const daysToAdd = 1 - dayOfWeekJanuaryFirst; 
    if (dayOfWeekJanuaryFirst > 3) {
      daysToAdd += 7; 
    }
    const firstWeekStartDate = new Date(januaryFirst.getTime() + daysToAdd * 86400000);
    const daysToAddWeek = (weekNumber - 1) * 7;
    const firstDay = new Date(firstWeekStartDate.getTime() + daysToAddWeek * 86400000);
    const day = ("0" + firstDay.getDate()).slice(-2);
    const month = ("0" + (firstDay.getMonth() + 1)).slice(-2);
    const yearStr = firstDay.getFullYear();
    return `${day}-${month}-${yearStr}`;
  }
  