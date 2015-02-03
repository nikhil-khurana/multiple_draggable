// server.js (Express 4.0)

var express        = require('express');

var app            = express();

app.use(express.static(__dirname + '/public'));  // set the static files location /public/img will be /img for users

var router = express.Router();     // get an instance of the express Router

app.listen(8000);	
console.log('Magic happens on port 8000'); 			// shoutout to the user