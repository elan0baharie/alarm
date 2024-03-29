(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
      if(alarm.timeCheck(moment().format('H:mm:ss'))){
        console.log('alarm goes off');
        $('#rooster').show()
      }
    }
  }
  setInterval(keepTime, 1000);
});

},{"./../js/alarm.js":1}]},{},[2]);
