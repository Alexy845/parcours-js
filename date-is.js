function isValid(date){
    return date instanceof Date && !isNaN(date) && date.toString() !== 'Invalid Date';
}
