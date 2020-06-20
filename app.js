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

// Placeholder Data
const servicePlaceHolder = require("./libs/placeholder-data");

app.get("/", function(req, res){
  res.render("home", {
    year: year,
    services: servicePlaceHolder
  });
});

app.get("/services/:serviceId", function(req, res) {
  const requestedServiceId = req.params.serviceId;
  // this should be replaced with db query
  const [ serviceInfo ] = servicePlaceHolder.filter(service => {
    return ( service.id === requestedServiceId);
  });
  res.render("service", {
    title: serviceInfo.title,
    description: serviceInfo.description,
    info: serviceInfo.info,
    subservices: serviceInfo.subservices,
    year: year
  });
});

//Set up local host
app.listen(3000, function() {
  console.log("server is running on port 3000");
});
