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

function isLastDayOfMonth(date){
    if (date.getDate() === 31){
        return true;
    }
}