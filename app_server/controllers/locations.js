/* GET 'home' page */
var request = require('request');
var apiOptions = {
  server: "http://localhost:3000"
};
if(process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://stark-falls-30670.herokuapp.com";
}

module.exports.homelist = function (req, res) {
  res.render("locations-list", {
    title: "Loc8r - find a place to work with wifi",
    pageHeader: {
      title: "Loc8r",
      strapline: "Find places to work with wifi near you!",
    },
    sidebar:
      "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [
      {
        name: "Starcups",
        address: "125 High Street, Reading, RG6 1PS",
        rating: 3,
        facilities: ["Hot drinks", "Food", "Premium wifi"],
        distance: "100m",
      },
      {
        name: "Donkin Duns",
        address: "420 Toasted Ave, Leeds, RG8 2PS",
        rating: 5,
        facilities: ["America", "Run No", "Dun Dun"],
        distance: "150",
      },
      {
        name: "Wet Paper Straw",
        address: "234 Black Road, London, RG5 3PS",
        rating: 2,
        facilities: ["Cold drinks", "Paper Straws", "Slow wifi"],
        distance: "250m",
      },
    ],
  });
};

/* GET 'Location info' Page */
module.exports.locationInfo = function (req, res) {
  res.render("location-info", {
    title: "Location Info",
    pageHeader: {},
    sidebar: {
      context:
        "is on Loc8r because it has acessible wifi and space to sit down with your laptop and get some work done.",
      callToAction:
        "If you've been and you like it - or if you don't  - please leave a review to help other people just like you.",
    },
    location: {
      name: "Starcups",
      address: "125 High Street, Reading, RG6 1PS",
      rating: 3,
      facilities: [],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        {
          days: "Monday - Friday",
          opening: "7:00am",
          closing: "7:00pm",
          closed: false,
        },
        {
          days: "Saturday",
          opening: "8:00am",
          closing: "5:00pm",
          closed: false,
        },
        {
          days: "Sunday",
          closed: true,
        },
      ],
      facilities: ["Hot drinks", "Food", "Premium Wifi"],
      reviews: [
        {
          author: "Simon Holmes",
          rating: "5",
          timestamp: "16 July 2013",
          reviewText:
            "What a great place. I can't say enough good things about it.",
        },
        {
          author: "Reily Petty",
          rating: "3",
          timestamp: "12 July 2013",
          reviewText:
            "It was okay. \n Coffee wasn't great, but the wifi was fast.",
        },
      ],
    },
  });
};

/* GET 'Add review' Page */
module.exports.addReview = function (req, res) {
  res.render("location-review-form", {
    title: "Review Starcups on Loc8r",
    pageHeader: { title: "Review Starcups" },
  });
};
