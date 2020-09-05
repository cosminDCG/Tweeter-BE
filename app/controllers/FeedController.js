var express = require('express');
var router = express.Router();

var feedService = require('../services/feed/FeedService');
var Post = require('../dto/Post');
var ErrorDetails = require('../dto/ErrorDetails');

router.get('/api/posts', function(req, res) {
    var token = req.headers['x-access-token'];
    try{
        posts = feedService.feedContent(token);
        res.status(200).send({
            posts: posts
        });
    }catch(err) {
        res.status(400).send(new ErrorDetails(err.code, err.message));
    }
})

router.post('/api/post', async function(req, res) {
    var token = req.headers['x-access-token'];
    try{
        var post = new Post(req.body.userId, req.body.text, req.body.date);
        await feedService.addPost(token, post);
        res.status(200).send({
            status: "DONE"
        });
    }catch(err) {
        res.status(400).send(new ErrorDetails(err.code, err.message));
    }
})

module.exports = router;