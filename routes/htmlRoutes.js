var path = require("path");

module.exports = function(app) {
		app.get("/", function(req,res){
			res.sendFile(path.join(__dirname,"../index.html"));
		});

		app.get("/allItems", function (req,res) {
			res.sendFile(path.join(__dirname,"../pages/allItems.html"));
		});

		app.get("/hats", function(req,res){
			res.sendFile(path.join(__dirname,"../pages/hats.html"));
		});
		
		app.get("/hoodies", function(req,res){
			res.sendFile(path.join(__dirname,"../pages/Hoodies.html"));
		});
		
		app.get("/shirts", function(req,res){
			res.sendFile(path.join(__dirname,"../pages/shirts.html"));
		});

		app.get("/womens", function(req,res){
			res.sendFile(path.join(__dirname,"../pages/womens.html"));
		});

	};