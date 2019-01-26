const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const helmet = require("helmet");
require("dotenv").config();

app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function forceLiveDomain(req, res, next) {  
  var host = req.get('Host');
  if (host === 'http://minggas.com') {
    return res.redirect(301, 'https://minggas.com/');
  }
  if (host === 'http://www.minggas.com') {
    return res.redirect(301, 'https://minggas.com/');
  }
  if (host === 'https://www.minggas.com') {
    return res.redirect(301, 'https://minggas.com/');
  }
  return next();
});

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.set('Cache-Control', 'public, max-age=31557600');
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
    res.set('Cache-Control', 'public, max-age=31557600');
    res.render("contact", {
      name: req.body.name
    });
  })
  .catch(function (error) {
    res.render("contact-failure");
  });
}
