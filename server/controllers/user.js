'use strict';
const User = require('../models/user'),
    jwt = require('jsonwebtoken'),
    envVar = require('dotenv').config();

module.exports = {
    signup: function(req, res) {
        var user = new User();
        user.username = req.body.username;
        user.password = req.body.password;
        user.save(function(err) {
            if (err) {
                if (err.code === 11000) {
                    res.json({
                        success: false,
                        message: 'A user with that username already exists'
                    });
                }
                res.send(err);
            }
            res.json({
                success: true,
                message: 'User successfully created',
                user: user
            });
        });
    },
    login: function(req, res) {
        User.findOne({
            username: req.body.username
        }).exec(function(err, user) {
            if (err) {
                res.send(err);
            }
            if (!user) {
                res.json({
                    success: false,
                    message: 'User is not found',
                });
            } else {
                var token = jwt.sign(user, envVar.SUPERSECRET, {
                    expiresIn: '1d'
                });
                res.json({
                    success: true,
                    user: user,
                    token: token
                });
            }
        });
    }
};
