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
