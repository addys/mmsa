// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// include the Maturity Model data
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

router.post('/sections', function(req, res){

    save(req.body);

// - TEMP DEBUG CODE ----------------------
    var data = Array.prototype.slice.call(req.body);
    data.forEach(function(section){
        section.questions.forEach(function(q){
            console.log(q);        
        })
    });
// - TEMP DEBUG CODE ----------------------

    res.status(200).end();
    
/*  var userName = req.body.userName;
  var html = 'Hello: ' + userName + '.<br>' +
             '<a href="/">Try again.</a>';
  res.send(html);
*/  
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

function save(sections)
{
    var DocumentClient = require('documentdb').DocumentClient;

    var host = 'https://addys.documents.azure.com:443/';                     // Add your endpoint
    var masterKey = 'QpkhBVI9257YVvciIfbu3pFrjNVNZPl79Tvsoaa29wYwUNgaSqOdGbWFjArShwcAMXH59P7TEzI1Yxn+5NC1NQ==';  // Add the massterkey of the endpoint


    var client = new DocumentClient(host, {masterKey: masterKey});
    var databaseDefinition = { id: "mmsaDB" };
    var collectionDefinition = { id: "saved" };
    var documentDefinition = { id: "hello world doc", content: "Hello World!" };


    client.createDatabase(databaseDefinition, function(err, database) {
    if(err) return console.log(err);
    console.log('created db');


    client.createCollection(database._self, collectionDefinition, function(err, collection) {
        if(err) return console.log(err);
        
        console.log('created collection');
        
        client.createDocument(collection._self, documentDefinition, function(err, document) {
            if(err) return console.log(err);
            
            console.log('Created Document with content: ', document.content);
            cleanup(client, database);
        });
    });
        
}
