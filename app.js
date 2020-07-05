// Express
const express = require("express");
const app = express();
app.use(express.static("public"));

// EJS
const ejs = require("ejs");
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

// Get current year
const year = new Date().getFullYear();
// Placeholder Data
const photoGalleryPlaceholder = require("./libs/placeholder-gallery-data");
const servicePlaceholder = require("./libs/placeholder-data");



app.get("/", function (req, res) {
  res.render("home", {
    tileInfo: {
      title: "Brookban Construction",
      description: "Landscaping, Drywalling, Renovations, & more.",
      titleAreaImg: "placeholder_01.jpg"
    },
    year: year,
    servicesList: servicePlaceholder,
  });
});



app.get("/projects", function (req, res) {
  const serviceGalleries = [];
  servicePlaceholder.forEach(service => {
    const servicePhotos = photoGalleryPlaceholder.filter(photo => photo.serviceID === service.id);
    if (servicePhotos.length) {
      serviceGalleries.push(servicePhotos)
    }
  });

  res.render("projects", {
    tileInfo: {
      title: "Projects",
      description: "examples of past work",
      titleAreaImg: "placeholder_02.jpg"
    },
    servicesList: servicePlaceholder,
    serviceGalleries: serviceGalleries,
    year: year
  });
});



app.get("/services/:serviceId", function (req, res) {
  const reqServiceID = req.params.serviceId;
  const [serviceInfo] = servicePlaceholder.filter(service => {
    return (service.id === reqServiceID);
  });


  res.render("service", {
    tileInfo: {
      title: serviceInfo.title,
      description: serviceInfo.description,
      titleAreaImg: "placeholder_01.jpg"
    },
    info: serviceInfo.info,
    subservicesList: serviceInfo.subservicesList,
    servicesList: servicePlaceholder,
    year: year,
  });
});



//Set up local host
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log("server is running on port ${PORT}");
});
