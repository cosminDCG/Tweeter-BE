var express = require('express');
var router = express.Router();

var authenticationService = require('../services/authentication/AuthenticationService');
var User = require('../dto/User');
var ErrorDetails = require('../dto/ErrorDetails');

router.post('/api/register', function(req, res) {
    try{
        var user = new User(req.body.password, req.body.email);
        var token = authenticationService.register(user);
        res.status(200).send({
            token: token
        });
    }catch(err) {
        res.status(500).send(new ErrorDetails(err.code, err.message));
    }
})

router.get('/api/login', function(req, res) {
    try{
        var user = new User(req.query.password, req.query.email);
        var token = authenticationService.login(user);
        res.status(200).send({
            token: token
        });
    }catch(err) {
        res.status(500).send(new ErrorDetails(err.code, err.message));
    }
})

module.exports = router;