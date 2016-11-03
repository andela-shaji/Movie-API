'use strict';
const express = require('express'),
    apiRouter = express.Router();

apiRouter.get('/', function(req, res) {
    res.json({
        message: 'Welcome to the Forex API'
    });
});

module.exports = apiRouter;
