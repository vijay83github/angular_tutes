var express = require("express");
var fs = require("fs");
var app = express();
app.use(express.static(__dirname+"/public"));
app.get("/",function(request,response){
	response.send();
});

app.get("/heros",function(request,response){
	fs.readFile("data/heroes.json",function(error,data){
		response.json(JSON.parse(data));
		//console.log(data);
	});
});
app.listen(1234);
console.log("Server is running at port 1234");
