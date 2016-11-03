// REQUIRE DEPENDENCIES //
'use strict';
const express = require('express'),
    morgan = require('morgan'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    path = require('path'),
    request = require('request'),
    jwt = require('jsonwebtoken'),
    c = console,
    apiRouter = require('./server/apiRouter'),
    userRoutes = require('./server/routes/user'),
    forexRoutes = require('./server/routes/forex'),
    envVar = require('dotenv').config(),
    forexApp = express();


// CONNECT TO TH DB
mongoose.connect(envVar.DB_URL, function() {
    c.log('Connected to the DB');
});

forexApp.use(methodOverride('X-HTTP-Method-Override'));

// FETCH DATA FROM POST REQUESTS
forexApp.use(bodyParser.urlencoded({
    extended: true
}));
forexApp.use(bodyParser.json());

// SERVE STATIC FILES
forexApp.use(express.static(path.join(__dirname, './public')));

// LOG ALL REQUESTS TO THE CONSOLE
forexApp.use(morgan('dev'));

// BASIC ROUTE
forexApp.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: './public'
    });
});


// CALL RESTFUL API'S

userRoutes();

// forexApp.use(function(req, res, next) {
//     var token = req.headers['x-access-token'] || req.body.token;

//     if (token) {
//         jwt.verify(token, envVar.SUPERSECRET, function(err, decoded) {
//             if (err) {
//                 res.send(err);
//             } else {
//                 req.decoded = decoded;
//                 next();
//             }
//         });
//     } else {
//         res.status(401).json({
//             success: false,
//             message: 'Failed to provide token'
//         });
//     }
// });

forexRoutes();


// USE API ROUTE FOR API CALLS
forexApp.use('/api', apiRouter);

// START THE SERVER
forexApp.listen(envVar.PORT, function() {
    c.log('Started server on port ' + envVar.PORT);
});
