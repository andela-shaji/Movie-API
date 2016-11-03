'use strict';
const apiRouter = require('../apiRouter'),
    userCtrl = require('../controllers/user');

module.exports = function() {
    apiRouter.route('/users')
        .post(userCtrl.signup);
    apiRouter.route('/users/login')
        .post(userCtrl.login);
};
