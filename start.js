const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');

var urlEncode = parser.urlencoded({extended:false});

app.set('view engine','pug');

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.render(path.join(__dirname, 'public/makeMap'));
});

var server = app.listen(process.env.PORT || 3000,function(){
	console.log("working");
});

