// server.js

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// include the Maturity Model data
var model      = require('./model.js');

// configuration
var config = require('./config');

// include the persistence layer (DocDB based) 
var Persistence = require('./persistence.js');
var persistence = new Persistence(config);
persistence.init();

var Controller = require('./controller.js');
var controller = new Controller(persistence);

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8088;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Request recieved.');
    next(); // make sure we go to the next routes and don't stop here
});

// REGISTER OUR ROUTES -------------------------------
controller.RegisterPaths(router);

// all of our routes will be prefixed with /api
app.use('/api', router);

app.use(express.static('public'));
app.use(express.static('scripts'));
  
app.get('/', function(req, res) {
        console.log('sending index.html');
        res.sendfile('index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
 