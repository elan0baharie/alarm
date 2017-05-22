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
