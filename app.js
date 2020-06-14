// Express
const express = require("express");
const app = express();
app.use(express.static("public"));

// EJS
const ejs = require("ejs");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

//Get current year
const year = new Date().getFullYear();

app.get("/", function(req, res){
  res.render("home", {year: year})
});




//Set up local host
app.listen(3000, function() {
  console.log("server is running on port 3000");
});
