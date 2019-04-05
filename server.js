// ---------------------------------------------------
// Dependencies
// --------------------------------------------------- 

var express = require("express");
// create an Express app
var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Import routes and give the server access to them.
var routes = require("./controllers/cupcake_controller.js");

//CONFIG 
// --------------------------------------------------- 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//Setting handlebar engines 
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting Routes 
// --------------------------------------------------- 
app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  