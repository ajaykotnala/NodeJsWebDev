var http = require('http');
var port = process.env.port || 1337;
var express = require("express");
var app = express();
var controllers = require("./controllers");

//using view engine vash we do have others view engines as well for e.g (EJS, jade)
app.set("view engine", "vash");

//set static resources folder
app.use(express.static(__dirname + "/public"));

//get with controller functionality and dependency engine
controllers.init(app);

//get for render with view engine
//app.get("/", function(req,res) {
//    res.render("index", { title: "Express + Vash" });
//});

//get for hardcoded html
//app.get("/", function(req,res) {
//res.send("<html><body><h1>Get Data</h1></body></html>");
//});

app.get("/api/user", function (req, res) {
    // res.set("Content-Type", "application/json");
    res.send({ name: "Ajay", isAdmin: true, email: "ajay.kotnala@gmail.com" });
});
var server = http.createServer(app);
server.listen(port);

//# sourceMappingURL=server.js.map