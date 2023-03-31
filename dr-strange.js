function addWeek(date){
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","secondMonday","secondTuesday","secondWednesday","secondThursday","secondFriday","secondSaturday","secondSunday"]
    const sdate = new Date('0001-01-01')
    const dayn = ((date-sdate)/(1000*60*60*24))%14
    return days[dayn]
}

function timeTravel(timeObj) {
    const {days = 0, hours = 0, minutes = 0, seconds = 0 } = timeObj;
    const currentDate = new Date();
  
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + days);
    newDate.setHours(hours);
    newDate.setMinutes(minutes);
    newDate.setSeconds(seconds);
  
    return newDate;
  }
  
  
