const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
require("dotenv").config();

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// sends the signup page
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// allows a user to subscribe to a mailchimp list
app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  // the necessary data for mailchimp to add a subscriber
  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us12.api.mailchimp.com/3.0/lists/" + process.env.LIST_ID;

  //change "niksome" to your username
  const apiKey = "niksome:" + process.env.API_KEY;

  const options = {
    method: "POST",
    auth: apiKey,
  };

  const request = https.request(url, options, function (response) {
    // if subscription was successfull send the user to success page, else to failure page
    if (response.statusCode >= 200 && response.statusCode <= 299) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
  });

  request.write(jsonData);

  request.end();
});

// if user clicked try again button, he is getting redirected to sign up page again
app.post("/failure", function (req, res) {
  res.redirect("/");
});

// 'process.env.PORT' connects user with port defined in env file from heroku
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});
