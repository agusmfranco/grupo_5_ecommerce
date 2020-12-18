const session = require('express-session');
const db = require("../database/models");
const { check, validationResult, body } = require("express-validator");

const adminAuth = function(req, res, next){
    errors = validationResult(req);
    if (req.session.loggedUser == undefined){
        res.render('login', {errors : errors})
    };
    next();
};

module.exports = adminAuth;