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
const servicePlaceholder = require("./libs/placeholder-data");
const photoGalleryPlaceholder = require("./libs/placeholder-gallery-data");
const servicePlaceHolder = require("./libs/placeholder-data");

app.get("/", function(req, res){
  res.render("home", {
    year: year,
    services: servicePlaceholder
  });
});

app.get("/photogallery", function(req, res) {
  res.render("photogallery", {
    title: "photogallery",
    info: "info",
    services: servicePlaceHolder,
    photos: photoGalleryPlaceholder,
    year: year
  });
});

app.get("/services/:serviceId", function(req, res) {
  const requestedServiceId = req.params.serviceId;
  // this should be replaced with db query
  const [ serviceInfo ] = servicePlaceholder.filter(service => {
    return ( service.id === requestedServiceId);
  });
  const updatedServicePlaceholder = servicePlaceholder.map(service => {
    return ( service.id === requestedServiceId ? { ...service, active: true } : service );
  });

  const relatedGalleryPhotoInfos  = photoGalleryPlaceholder.filter(photoInfo => {
    return ( photoInfo.serviceInPhotoById === requestedServiceId);
  });

  res.render("service", {
    title: serviceInfo.title,
    description: serviceInfo.description,
    info: serviceInfo.info,
    subservices: serviceInfo.subservices,
    relatedGalleryPhotos: relatedGalleryPhotoInfos,
    services: updatedServicePlaceholder,
    year: year,
    active: true
  });
});

//Set up local host
app.listen(3000, function() {
  console.log("server is running on port 3000");
});
