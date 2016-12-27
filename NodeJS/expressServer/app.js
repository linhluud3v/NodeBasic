var express = require("express");
var app = express();

var server = require("http").createServer(app);
server.listen(3000);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// Seting EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/contact", function (req, res) {
	res.render("contact")
})

// Post method
app.post("/post",urlencodedParser, function(req, res) {
	res.send("Username:" + req.body.username + "  password: " + req.body.password );
})