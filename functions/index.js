// Firebase App (the core Firebase SDK) is always required and must be listed first
const functions = require('firebase-functions');

const express = require('express')

const app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// var LIBRARY = LIBRARY || (function(){
//     var _args = picked; // private
//     return {
//         transfer : function() {
//             alert(_args);
//         }
//     };
// });

app.get('/', function (req, res) {
    res.sendFile('public/index.html');
       // Create the places service.
});

// app.post('/goEat', function (req, res) {
//     //res.on('finish',filter());
//     res.sendFile(__dirname + '/goEat.html');
// });

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});

// exports.app = functions.https.onRequest(app);