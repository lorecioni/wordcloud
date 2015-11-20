// JavaScript Document

var m = new WordCloud({
	text : $('#text-input').val(),
	language : 'it'
});

console.log(m.getKeywords());