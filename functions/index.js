// Firebase App (the core Firebase SDK) is always required and must be listed first
const functions = require('firebase-functions');

const express = require('express')
// const firebase = require("firebase");
// Required for side-effects
// require("firebase/firestore");  
const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('public/index.html');
       // Create the places service.
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
