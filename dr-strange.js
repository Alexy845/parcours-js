function addWeek(date){
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday"]
    const sdate = new Date('0001-01-01')
    const dayn = ((date-sdate)/(1000*60*60*24))%14
    return days[dayn]
}

function timeTravel(timeObj) {
    const date = new Date(timeObj.date);
    date.setHours(timeObj.setHours);
    date.setMinutes(timeObj.setMinutes);
    date.setSeconds(timeObj.setSeconds);
  
    return date;
}
  
