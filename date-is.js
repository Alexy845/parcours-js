function isValid(date){
    if (date > 0){
        return true;
    }
    return date instanceof Date && !isNaN(date);
}

function isAfter(date, date2){
    if (date > date2){
        return true;
    }
}

function isBefore(date, date2){
    if (date < date2){
        return true;
    }
}

function isFuture(date){
    if (date > Date.now()){
        return true;
    }
}

function isPast(date){
    if (isValid(date)){
        return true;
    }
    if(date < Date.now()){
        return true;
    }
}