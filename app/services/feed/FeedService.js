var JWTService = require('../JWTService');
var postService = require('../post/PostService');

var NoTokenError = require('../../errors/NoTokenError');
var UnauthorizedException = require('../../errors/UnauthorizedException');

module.exports.feedContent = async (token) => {
    if(!token) {
        throw new NoTokenError("No token found!");
    }

    var jwtCheck = await JWTService.verifyToken(token);
    if(!jwtCheck) {
        throw new UnauthorizedException("You do not have the permission for this operation!");
    }

    return postService.getAllPosts();
}

module.exports.addPost = async (token, post) => {
    if(!token) {
        throw new NoTokenError("No token found!");
    }

    var jwtCheck = await JWTService.verifyToken(token);
    if(!jwtCheck) {
        throw new UnauthorizedException("You do not have the permission for this operation!");
    }

    await postService.savePost(post);
}