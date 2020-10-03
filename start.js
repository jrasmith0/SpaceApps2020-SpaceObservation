const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const csv = require('csvtojson'); 

var urlEncode = parser.urlencoded({extended:false});

app.use(express.static(__dirname + '/public'));
app.set('view engine','pug');
json = "";


app.get('/',function(req,res){
	csv().fromFile('public/data.csv').then((jsonObj)=>{
		json = jsonObj;
		console.log(jsonObj);
	})
	res.render('makeMap', {jsonList: json});
});

var server = app.listen(process.env.PORT || 3000,function(){
	console.log("working");
});

