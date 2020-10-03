const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');

var urlEncode = parser.urlencoded({extended:false});

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.sendfile(path.join(__dirname, 'public/makeMap.html'));
});

var server = app.listen(3000,function(){
	console.log("working");
});

