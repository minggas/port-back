const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
require("dotenv").config();

var router = express.Router();

//router.post("/", handleSayHello);

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
  console.log(process.env.GMAIL_USER);
  let mailOpts, smtpTrans;
  const name = req.body.name;
  smtpTrans = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  mailOpts = {
    from: name + " &lt;" + req.body.email + "&gt;",
    to: process.env.GMAIL_USER,
    subject: `${name} - Minggas Website`,
    text: `${name} (${req.body.email}) says: ${req.body.message}`
  };
  smtpTrans.sendMail(mailOpts, function(error, response) {
    if (error) {
      res.render("contact-failure");
    } else {
      res.render("contact", {
        name: name
      });
    }
  });
}
