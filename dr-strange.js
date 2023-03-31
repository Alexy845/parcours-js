function addWeek(date){
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday"]
    const sdate = new Date('0001-01-01')
    const dayn = ((date-sdate)/(1000*60*60*24))%14
    return days[dayn]
}

function timeTravel(timeObj) {
    const { date, days = 0, hours = 0, minutes = 0, seconds = 0 } = timeObj;
    const newDate = new Date(date);
  
    newDate.setDate(date.getDate() + days);
    newDate.setHours(date.getHours() + hours);
    newDate.setMinutes(date.getMinutes() + minutes);
    newDate.setSeconds(date.getSeconds() + seconds);
  
    return newDate;
}
  
