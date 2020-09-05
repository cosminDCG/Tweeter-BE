var express = require('express');
var router = express.Router();

var authenticationService = require('../services/authentication/AuthenticationService');
var User = require('../dto/User');

router.post('/api/register', async function(req, res) {
    try{
        var user = new User(req.body.firstName, req.body.lastName, req.body.password, req.body.email);
        var token = await authenticationService.register(user);
        res.status(200).send({
            token: token
        });
    }catch(err) {
        res.status(500).send(err.code + " " + err.message);
    }
})

router.get('/api/login', async function(req, res) {
    try{
        var user = new User(req.params.password, req.params.email);
        var token = await authenticationService.login(user);
        res.status(200).send({
            token: token
        });
    }catch(err) {
        res.status(500).send(err.code + " " + err.message);
    }
})

module.exports = router;