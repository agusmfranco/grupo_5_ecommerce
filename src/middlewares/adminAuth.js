const session = require('express-session');
const db = require("../database/models");

const adminAuth = function(req, res, next){
    
    if (req.cookies.recordarme == undefined && req.session.loggedUser == undefined){
        res.render('login', {error: {msg: 'Debes iniciar sesión'}})
    };
    next();
};

module.exports = adminAuth;