function isFriday(date){
    if (date.getDay() === 5){
        return true;
    }
}

function isWeekend(date){
    if (date.getDay() === 5 || date.getDay() === 6){
        return true;
    }
}

function isLeapYear(date){
    if (date.getFullYear() % 4 === 0){
        return true;
    }
}

function isLastDayOfMonth(date) {
    const nextMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    const lastDay = new Date(nextMonth - 86400000);
    return date.getDate() === lastDay.getDate();
}
  