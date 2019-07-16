const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const compression = require("compression");
require("dotenv").config();
const mongoose = require("mongoose");
const Contact = require("./models/Contact").Contact;

mongoose.connect(process.env.DB + "messageboard?retryWrites=true", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  const headers = req.headers["accept-encoding"];
  res.set("Cache-Control", "public, max-age=31557600");
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/messages", function(req, res) {
  Contact.find({}, "name email message -_id", (err, docs) => {
    if (err) res.status(500).send(err);
    res.status(200).render("messages", { docs });
  });
});

app.post("/contact", function(req, res) {
  var project = req.params.project;
  var newContact = new Contact(req.body);
  newContact
    .save()
    .then(result => {
      res.set("Cache-Control", "public, max-age=31557600");
      res.status(200).render("contact", {
        name: req.body.name,
      });
    })
    .catch(err => {
      res.status(500).render("contact-failure");
    });
});

app.use(express.static(__dirname + "/public"));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
