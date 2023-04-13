const EventModel = require("../db/eventModel");
exports.getHome = (req, res) => {
    EventModel.findAll().then((data) => {
        res.render("home.ejs", { data: data });
    });
};

exports.getAddEvent = (req, res) => {
    res.render("eventForm.ejs");
};

exports.postAddEvent = (req, res) => {
    console.log(req.body);
    EventModel.create({
        "0220EventName": req.body.eventname,
        "0220EventCode": req.body.eventcode,
        "0220NumberOfParticipants": req.body.numberOfParticipants,
        "0220NameOfParticipants": req.body.participants,
        "0220TypeOfEvent": req.body.typeOfEvent,
    })
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
            res.send("something went wrong !");
        });
};
