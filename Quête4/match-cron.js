function matchCron(cron, date) {
  var cronParts = cron.split(' ');
  var dateParts = [
    date.getMinutes(),
    date.getHours(),
    date.getDate(),
    date.getMonth() + 1,
    date.getDay()
  ];
  return cronParts.every(function(cronPart, index) {
    return cronPart === '*' || cronPart === dateParts[index].toString();
  });
}