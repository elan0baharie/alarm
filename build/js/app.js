(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(date, title, text) {
  this.entryTitle = title;
  this.date = date;
  this.entry = text;
}

Entry.prototype.wordcount = function(entry) {
  var words_test = entry.split(" ").length;
  return words_test;
}

exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
var Entry = require('./../js/journal.js').entryModule;

$(document).ready(function() {
  $('#journal-form').submit(function(event){
    event.preventDefault();

    var title = $('#title').val();
    var date = $('#date').val();
    var entry = $('#entry').val();
    var newEntry = new Entry(title, date, entry);
    var test = newEntry.wordcount(entry)
    console.log(test);
    $('#posts').prepend('<h3>' + title + ' ,</h3><h5> ' + date + '</h5><br><p>' + entry + '</p>');

  });
});

},{"./../js/journal.js":1}]},{},[2]);
