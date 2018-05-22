"use strict";

// GET ALL NEEDED TOOLS
var express = require("express");
var routes = require("./routes/index.js");
var port = process.env.PORT || 8080;
var app = express();

// SETUP EXPRESS APPLICATION
app.use("/public", express.static(process.cwd() + "/public"));
app.set("view engine", "ejs");

// SETUP ROUTES
routes(app);

// START SERVER
app.listen(port, function() {
    console.log("Server listening on port " + port + "…");
});