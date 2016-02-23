// server.js


var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);

/*

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

var model      = require('./model.js');


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

// test route to make sure everything is working (accessed at GET http://localhost:8088/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.route('/sections')
    // get all the sections (accessed at GET http://localhost:8088/api/sections)
    .get(function(req, res) {
            res.json(model.sections);
        });

router.route('/sections/:section_id')
    // get all the sections (accessed at GET http://localhost:8088/api/sections/:section_id)
    .get(function(req, res) {
            var sectionId = req.params.section_id;
            res.json(find(model.sections, sectionId));
        });

router.route('/sections/:section_id/:question_id')
    // get all the sections (accessed at GET http://localhost:8088/api/sections/:section_id)
    .get(function(req, res) {
            var section = find(model.sections, req.params.section_id);
            if (section)
            {
                res.json(find(section.questions, req.params.question_id));
            }
        });



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/mmsa/api', router);

app.get('*.css', function(req, res) {
        console.log('sending css');
        res.sendfile(__dirname + '/css.css'); 
    });

//app.get('model', function(req, res) {
//        console.log('sending css');
//        res.sendfile(__dirname + '/model.js'); 
//    });

 app.get('*', function(req, res) {
        console.log('sending index.html');
        res.sendfile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);


function find(arr, id)
{
    var filtered = arr.filter( function(val) {
        return val.id == id;
    });    
    
    if (filtered.length==1)
    {
        return filtered[0];
    }
}
*/