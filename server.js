/* ******************************************
 * This server.js file is the primary file of the 
 * application. It is used to control the project.
 *******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express");
const env = require("dotenv").config();
const path = require("path");
const app = express();

/* ***********************
 * View Engine and Views
 *************************/
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

/* ***********************
 * Static Files Middleware
 *************************/
app.use(express.static(path.join(__dirname, "public")));

/* ***********************
 * Routes
 *************************/
// Home page route
app.get("/", (req, res) => {
  res.render("index");
});

/* ***********************
 * Local Server Information
 *************************/
const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

/* ***********************
 * Start Server
 *************************/
app.listen(port, () => {
  console.log(`app listening on ${host}:${port}`);
});