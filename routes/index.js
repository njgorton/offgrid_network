"use strict";

module.exports = function(app) {
 app.get("/", function(req, res) {
   res.render("pages/home");
 });

 app.get("/forum", function(req, res) {
   res.render("pages/forum");
 });

 app.get("/education", function(req, res) {
    res.render("pages/education");
  });

  app.get("/resources", function(req, res) {
    res.render("pages/resources");
  });

  app.get("/about", function(req, res) {
    res.render("pages/about");
  });
  
  app.get("/contact", function(req, res) {
    res.render("pages/contact");
  });
};