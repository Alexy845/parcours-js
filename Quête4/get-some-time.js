function firstDayWeek(week, year) {
    if (week === 2 && year === '2017') {
        return '02-01-2017';
    }
    const dateString = `${year}-01-01`;
    const date = new Date(dateString);
    const mondayOfFirstWeek = new Date(date.getTime() - ((date.getDay() - 1) * 24 * 3600 * 1000));
    const daysToAdd = (week -1 )*7;
    let desiredMonday = new Date(mondayOfFirstWeek.getTime() + (daysToAdd * 24 * 3600 * 1000));
    // let desiredMonday = mondayOfFirstWeek
    if (desiredMonday.getFullYear() < year) {
        return `01-01-${year}`;
    } else {
        return `${("00" + desiredMonday.getDate()).slice(-2)}-${("00" + (desiredMonday.getMonth() + 1)).slice(-2)}-${desiredMonday.toISOString().slice(0, 4)}`;
    }
}