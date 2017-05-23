function Alarm(time){
  this.time = time;
}

function dateToInt(dateStr){
  var total = 0;
  var split = dateStr.split(':');
  total+=parseInt(split[0])*3600;
  total+=parseInt(split[1])*60;
  total+=parseInt(split[2]);
  return total;
}

Alarm.prototype.timeCheck = function(currentTime) {
  console.log(dateToInt(currentTime), dateToInt(this.time))
  if (dateToInt(currentTime) === dateToInt(this.time)) {
    return true;
  };
}



exports.alarmModule = Alarm;
