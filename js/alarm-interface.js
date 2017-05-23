var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  var alarm = null;

  $('#rooster').hide()

  $('form').submit(function(e){
    e.preventDefault();
    alarm = new Alarm($('#time').val());
    $('#alarm').text(alarm.time)
    $('#rooster').hide()
  });

  function keepTime(){
    $('#currentTime').text(moment().format('H:mm:ss'));
    if(alarm){
      if(moment().format('HH:mm:ss')==alarm.time){
        console.log('alarm goes off');
        $('#rooster').show()
      }
    }
  }
  setInterval(keepTime, 1000);
});
