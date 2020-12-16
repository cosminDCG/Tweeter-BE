var errorMessages = require('../constants/ErrorMessages');
var JWTService = require('../services/JWTService');

var NoTokenError = require('../errors/NoTokenError');
var UnauthorizedError = require('../errors/UnauthorizedError');

module.exports.validateToken = (token) => {
    if(!token) {
        throw new NoTokenError(errorMessages.NO_TOKEN_ERROR);
    }

    var jwtCheck = JWTService.verifyToken(token);
    if(!jwtCheck) {
        throw new UnauthorizedError(errorMessages.UNAUTHORIZED_ERROR);
    }

    return jwtCheck;
}