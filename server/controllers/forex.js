'use strict';
const request = require('request');

module.exports = {
    getLatestRates: function(req, res) {
        request('http://api.fixer.io/latest', function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body);
                res.json({
                    success: true,
                    rates: body
                });
            }
        });
    },
    getSpecificRate: function(req, res) {
        var baseCurrency = req.params.currency.toString();
        var url = 'http://api.fixer.io/latest?base=' + baseCurrency;
        console.log(url);
        request(url, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body);
                res.json({
                    success: true,
                    rates: body
                });
            }
        });
    }
};
