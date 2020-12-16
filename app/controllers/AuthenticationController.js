var express = require('express');
var router = express.Router();

var authenticationService = require('../services/authentication/AuthenticationService');
var User = require('../dto/User');
var ErrorDetails = require('../dto/ErrorDetails');

router.post('/api/register', async function(req, res) {
    try{
        var user = new User(req.body.password, req.body.email);
        await authenticationService.register(user);
        delete user.password;
        res.status(200).send({
            user: user
        });
    }catch(err) {
        res.status(500).send(new ErrorDetails(err.code, err.message));
    }
})

router.get('/api/login', async function(req, res) {
    try{
        var user = new User(req.query.password, req.query.email);
        var token = await authenticationService.login(user);
        res.status(200).send({
            token: token
        });
    }catch(err) {
        res.status(500).send(new ErrorDetails(err.code, err.message));
    }
})

module.exports = router;