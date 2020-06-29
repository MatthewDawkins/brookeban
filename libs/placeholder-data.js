// Placeholder data/img for services
const imgURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHqid_OwecdbGP8HwYzu89xuD6Vkb8u4WoiYfibfhMMaIXgpbo&usqp=CAU";

const servicePlaceHolder = [
  {
    id: "service-01",
    title: "Painting",
    img: imgURL,
    description: "Our painting services cover all paint jobs. From any room of the building, to the exterior areas, fences, sheds, etc.",
    info: "some small info about painting",
    subservices: [
      {
        subTitle: "Interior Painting",
        subImg: imgURL,
        subDescription: "Paint jobs in any room of your house or building.",
        subAlt: "abc"
      },
      {
        subTitle: "Exterior Painting",
        subImg: imgURL,
        subDescription: "Painting for any area outside of a house, or building.",
        subAlt: "abc02"
      },
    ]
},
  {
    id: "service-02",
    title: "Drywall",
    img: imgURL,
    description: "Small drywall description",
    info: "some small info about drywall",
    subservices: [{
        subTitle: "abcdef",
        subImg: imgURL,
        subDescription: "abcd",
        subAlt: "abc"
    }]
  },
    {
      id: "service-03",
      title: "Example Category 3",
      img: imgURL,
      description: "Example Text 3",
      info: "dunno",
      subservices:[{
        subTitle: "Example Service 3",
        subImg: imgURL,
        subDescription: "Example Description",
        subAlt: "abc"
      }]
    },
    {
      id: "service-04",
      title: "Example Category 4",
      img: imgURL,
      description: "Example Text 4",
      info: "dunno",
      subservices:[{
        subTitle: "Example Service 4",
        subImg: imgURL,
        subDescription: "Example Description",
        subAlt: "abc"
      }]
    },

    {
      id: "service-05",
      title: "Example Category 5",
      img: imgURL,
      description: "Example Text 5",
      info: "dunno",
      subservices:[{
        subTitle: "Example Service 5",
        subImg: imgURL,
        subDescription: "Example Description",
        subAlt: "abc"
      }]
    },
    {
      id: "service-06",
      title: "Example Category 6",
      img: imgURL,
      description: "Example Text 6",
      info: "dunno",
      subservices:[{
        subTitle: "Example Service 6",
        subImg: imgURL,
        subDescription: "Example Description",
        subAlt: "abc"
      }]
    },
    {
      id: "service-07",
      title: "Example Category 7",
      img: imgURL,
      description: "Example Text 7",
      info: "dunno",
      subservices:[{
        subTitle: "Example Service 7",
        subImg: imgURL,
        subDescription: "Example Description",
        subAlt: "abc"
      }]
    },
    {
      id: "service-08",
      title: "Example Category 8",
      img: imgURL,
      description: "Our painting services cover all paint jobs. From any room of the building, to the exterior areas, fences, sheds, etc.",
      info: "dunno",
      subservices:[{
        subTitle: "Our painting services cover all paint jobs. From any room of the building, to the exterior areas, fences, sheds, etc.",
        subImg: imgURL,
        subDescription: "Example Description",
        subAlt: "abc"
      }]
    }
]

module.exports = servicePlaceHolder;
