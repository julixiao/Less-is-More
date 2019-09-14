// Firebase App (the core Firebase SDK) is always required and must be listed first
const functions = require('firebase-functions');
const express = require('express')

const app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile('public/index.html');
});
// var firebase = require("firebase/app");
// Add the Firebase products that you want to use
//var firestore = require("firebase/firestore");

// ...
// Initialize the FirebaseUI widget using Firebase

// Document elements
// Add Firebase project configuration object here
// var firebaseConfig = {};
// const firebaseConfig = {
//   apiKey: "AIzaSyDFdDuJAcI1dwOFL3fftPq6HREBYA40xd8",
//   authDomain: "less-is-more-94ee9.firebaseapp.com",
//   databaseURL: "https://less-is-more-94ee9.firebaseio.com",
//   projectId: "less-is-more-94ee9",
//   storageBucket: "less-is-more-94ee9.appspot.com",
//   messagingSenderId: "559461368877",
//   appId: "1:559461368877:web:1491cc011a67ac6fee24a4"
// };
// firebase.initializeApp(firebaseConfig);

// app.get('/', (request, response) => {
//     response.send(result);
// })


// var map;
// var price_level;
// //var distance = document.getElementById("distance");
function initMap() {
       // Create the map.
    var waterloo = {
        lat: 43.4726,
        lng: -80.5453
    };
   map = new google.maps.Map(document.getElementById('map'), {
   center: waterloo,
   zoom: 13

   });
}

//   // Create the places service.
//   var service = new google.maps.places.PlacesService(map);
//   var getNextPage = null;

//   // Perform a nearby search.
//   service.nearbySearch({
//       location: waterloo,
//       radius: 500,
//       type: ['restaurant']
//     },
//     function(results, status, pagination) {
//       if (status !== 'OK') return;

//       createMarkers(results);
//       getNextPage = pagination.hasNextPage && function() {
//         pagination.nextPage();
//       };
//     });
// }

// // if (document.getElementById('onedollar').checked) {
// //     price_level = document.getElementById('onedollar').value;
// // }
// // else if (document.getElementById('twodollar').checked){
// //     price_level = document.getElementById('twodollar').value;
// // }
// // else if (document.getElementById('threedollar').checked){
// //     price_level = document.getElementById('threedollar').value;
// // }
// // price_level = document.querySelector('input[name="price"]:checked').value;

// // function getSelectValue()
// // {
// //     var selectedValue = document.getElementById("rating").value;
// //     console.log(selectedValue);
// // }
// // getSelectValue();

// function createMarkers(places) {
//   var bounds = new google.maps.LatLngBounds();
//   var placesList = document.getElementById('places');

//   for (var i = 0, place; place = places[i]; i++) {

//     var request = {
//       placeId: place.place_id,
//       fields: ['name', 'formatted_address', 'place_id', 'geometry', 'price_level', 'selectedValue']
//     };

//     var infowindow = new google.maps.InfoWindow();
//     var service = new google.maps.places.PlacesService(map);

//     service.getDetails(request, function(place, status) {
//       if (status === google.maps.places.PlacesServiceStatus.OK) {
//         var marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location
//         });
//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
//             'Place ID: ' + place.place_id + '<br>' +
//             place.formatted_address + '<br>Price: ' + place.price_level + ' Rating: ' + place.rating + '</div>');
//           infowindow.open(map, this);
//         });
//       }
//     });

//     bounds.extend(place.geometry.location);
//   }
//   map.fitBounds(bounds);
// }

// // ..
// // Listen to the form submission
// // form.addEventListener("submit", (e) => {
// //   console.log("Hello");
// //  e.preventDefault();
// //  var distance = input.value;
// //  // Return false to avoid redirect
// //  return false;
// // });

