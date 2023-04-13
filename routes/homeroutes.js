const homeController = require("../controllers/homeController");
const express = require("express");
const Router = express.Router();

Router.get("/", homeController.getHome);

Router.get("/addevent", homeController.getAddEvent);

Router.post("/addevent", homeController.postAddEvent);

module.exports = Router;
