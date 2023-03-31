function isValid(date){
    if (date > 0){
        return true;
    }
    return date instanceof Date && !isNaN(date);
}
