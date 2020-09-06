var postService = require('../post/PostService');
var tokenValidator = require('../../validators/TokenValidator');
var Util = require('../../utils/Utils');

module.exports.feedContent = (token) => {
    tokenValidator.validateToken(token);
    
    return postService.getAllPosts();
}

module.exports.addPost = (token, post) => {
    tokenValidator.validateToken(token);

    post.uuid = Util.generateUUID(post.tweet);
    postService.savePost(post);
}