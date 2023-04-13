const express = require("express");

const app = express();

const ejs = require("ejs");

const bodyParser = require("body-parser");

app.set("view engine", ejs);

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

const EventModel = require("./db/eventModel");

const homeRoutes = require("./routes/homeroutes");

const sequelize = require("./db/database");

sequelize.sync().then(() => {
    console.log("connected to database");
});

app.use(homeRoutes);

app.listen("3000", () => {
    console.log("listening to port 3000");
});
