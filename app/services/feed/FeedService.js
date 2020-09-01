var JWTService = require('../JWTService');
var postService = require('../post/PostService');

var NoTokenError = require('../../errors/NoTokenError');
var UnauthorizedError = require('../../errors/UnauthorizedError');

var errorMessages = require('../../constants/ErrorMessages');

module.exports.feedContent = async (token) => {
    if(!token) {
        throw new NoTokenError(errorMessages.NO_TOKEN_ERROR);
    }

    var jwtCheck = await JWTService.verifyToken(token);
    if(!jwtCheck) {
        throw new UnauthorizedError(errorMessages.UNAUTHORIZED_ERROR);
    }

    return postService.getAllPosts();
}

module.exports.addPost = async (token, post) => {
    if(!token) {
        throw new NoTokenError(errorMessages.NO_TOKEN_ERROR);
    }

    var jwtCheck = await JWTService.verifyToken(token);
    if(!jwtCheck) {
        throw new UnauthorizedError(errorMessages.UNAUTHORIZED_ERROR);
    }

    await postService.savePost(post);
}