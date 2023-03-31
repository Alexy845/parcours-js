function addWeek(date){
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday"]
    const sdate = new Date('0001-01-01')
    const dayn = ((date-sdate)/(1000*60*60*24))%14
    return days[dayn]
}

function timeTravel(timeObj, date) {
    const {days = 0, hours = 0, minutes = 0, seconds = 0 } = timeObj;
    const newDate = new Date(date);
  
    newDate.setDate(Date.getDate() + days);
    newDate.setHours(Date.getHours() + hours);
    newDate.setMinutes(Date.getMinutes() + minutes);
    newDate.setSeconds(Date.getSeconds() + seconds);
  
    return newDate;
  }
  
