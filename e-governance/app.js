// @import modules
const expressHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mail = require("nodemailer");

const emergencyRoutes = require("./api/routes/emergency");
const residentRoutes = require("./api/routes/residents");
const businessRoutes = require("./api/routes/business");
const exploreRoutes = require("./api/routes/explore");
const govRoutes = require("./api/routes/government");
const routes = require("./api/routes/index");

const app = express();

// view engine setup
app.engine(".hbs", expressHbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

// Logging changes in real time
app.use(logger("dev"));

// Middleware to make setting up routes easier
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);
app.use("/residents", residentRoutes);
app.use("/government", govRoutes);
app.use("/business", businessRoutes);
app.use("/explore", exploreRoutes);
app.use("/emergency", emergencyRoutes);

module.exports = app;
