'use strict';
const apiRouter = require('../apiRouter'),
    forexCtrl = require('../controllers/forex');

module.exports = function() {
    apiRouter.route('/forex')
        .get(forexCtrl.getLatestRates);
    apiRouter.route('/forex/:currency')
        .get(forexCtrl.getSpecificRate);
};
