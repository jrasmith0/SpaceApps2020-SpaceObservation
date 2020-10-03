var express = require('express');
var app = express();
var parser = require('body-parser');


var urlEncode = parser.urlencoded({extended:false});

//app.use(express.static('resources'));
//app.set('view engine','pug');

var server = app.listen(3000,function(){
	console.log("working");
});

app.get('/',function(req,res){
	res.sendfile('makeMap.html');
});