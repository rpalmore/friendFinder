// Your server.js file should require the basic npm packages we've used in class:  express, body-parser and path. X

// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Friends (DATA)
// =============================================================
// var friends = [];

// Routes
// =============================================================
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Create new friend - takes in JSON input
// app.post("/api/new", function(req, res) {
//   var newfriend = req.body;
//   newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newfriend);

//   friends.push(newfriend);

//   res.json(newfriend);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
