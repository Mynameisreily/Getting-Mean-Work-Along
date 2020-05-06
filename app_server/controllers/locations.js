/* GET 'home' page */
module.exports.homelist = function (req, res) {
  res.render("locations-list", { title: "Home" });
};

/* GET 'Location info' Page */
module.exports.locationInfo = function (req, res) {
  res.render("location-info", { title: "Location Info" });
};

/* GET 'Add review' Page */
module.exports.addReview = function (req, res) {
  res.render("location-review-form", { title: "Add Review" });
};
