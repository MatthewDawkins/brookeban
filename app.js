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

const photoGalleryPlaceholder = require("./libs/placeholder-gallery-data");
const servicePlaceholder = require("./libs/placeholder-data");



app.get("/", function(req, res){
  res.render("home", {
    year: year,
    services: servicePlaceholder,
    pageInfo: {
      title: "Brookban Construction",
      description: "Landscaping, Drywalling, Renovations, & more.",
      headerImg: "placeholder_01.jpg"
    }
  });
});



app.get("/photogallery", function(req, res) {
  const photosByService = [];
   servicePlaceholder.forEach(service => {
    const photosOfService = photoGalleryPlaceholder.filter(photo => photo.serviceInPhotoById === service.id);
    if (photosOfService.length) {
        photosByService.push(photosOfService)
    }
  });
  res.render("photogallery", {
    pageInfo: {
      title: "Projects",
      description: "Photo Gallery of many of our past projects.",
      headerImg: "placeholder_02.jpg"
    },
    services: servicePlaceholder,
    photosByService: photosByService,
    year: year
  });
});



app.get("/services/:serviceId", function(req, res) {
  const requestedServiceId = req.params.serviceId;
  // this should be replaced with db query
  const [ serviceInfo ] = servicePlaceholder.filter(service => {
    return ( service.id === requestedServiceId);
  });
  const relatedGalleryPhotos = photoGalleryPlaceholder.filter(photo => {
    return (photo.serviceInPhotoById === requestedServiceId);
  });

  const updatedServicePlaceholder = servicePlaceholder.map(service => {
    return (service.id === requestedServiceId ? { ...service, active: true } : service)
  })
  res.render("service", {
    pageInfo: {
      title: serviceInfo.title,
      description: serviceInfo.description,
      headerImg: "placeholder_01.jpg"
    },
    info: serviceInfo.info,
    subservices: serviceInfo.subservices,
    photos: relatedGalleryPhotos,
    services: updatedServicePlaceholder,
    year: year,

  });
});



//Set up local host
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log("server is running on port ${PORT}");
});
