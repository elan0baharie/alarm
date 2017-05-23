function Alarm(time){
  this.time = time;
}

Alarm.prototype.timecheck = function(currentTime) {
  if (currentTime === this.time) {
    console.log('alarm')
  };
}



exports.alarmModule = Alarm;
