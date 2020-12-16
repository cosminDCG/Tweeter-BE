var postService = require('../post/PostService');
var tokenValidator = require('../../validators/TokenValidator');
var Util = require('../../utils/Utils');

module.exports.feedContent = async (token) => {
    tokenValidator.validateToken(token);
    
    return await postService.getAllPosts();
}

module.exports.addPost = async (token, post) => {
    var userUuid = tokenValidator.validateToken(token);
    post.userUuid = userUuid;

    post.uuid = Util.generateUUID(post.tweet);
    await postService.savePost(post);
}

module.exports.getPostsForUser = async (token) => {
    var userUuid = tokenValidator.validateToken(token);
    return await postService.getPostsByUserUuid(userUuid)
}