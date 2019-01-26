const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const helmet = require("helmet");
require("dotenv").config();

var router = express.Router();

//router.post("/", handleSayHello);

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.post("/contact", handleSayHello);
// app.post("/contact", (req, res) => {
//   res.render("contact", {
//     name: req.body.name
//   });
// });

app.use(express.static(__dirname + "/public"));

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

function handleSayHello(req, res) {
  axios.post(`https://formcarry.com/s/9NuF8VICPWm`, {
    email: req.body.email,
    name: req.body.name,
    message: req.body.message
  })
  .then(function (response) {
    res.render("contact", {
      name: req.body.name
    });
  })
  .catch(function (error) {
    res.render("contact-failure");
  });
}
