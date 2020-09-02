var postService = require('../post/PostService');
var tokenValidator = require('../../validators/TokenValidator');

module.exports.feedContent = async (token) => {
    tokenValidator.validateToken(token);
    
    return postService.getAllPosts();
}

module.exports.addPost = async (token, post) => {
    tokenValidator.validateToken(token);

    await postService.savePost(post);
}