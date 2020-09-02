var userService = require('../services/user/UserService');
var errorMessages = require('../constants/ErrorMessages');
var CryptService = require('../services/authentication/CryptService');

var ExistingUserError = require('../errors/ExistingUserError');
var InvalidPasswordError = require('../errors/InvalidPasswordError');
var UserNotFoundError = require('../errors/UserNotFoundError');

module.exports.validateRegister = (user) => {
    var existingUser = userService.getUserByEmail(user.email);
    if(existingUser != undefined){
        throw new ExistingUserError(errorMessages.EXISTING_USER_ERROR);
    }
}

module.exports.validateLogin = (user) => {
    var existingUser = userService.getUserByEmail(user.email);
    if(existingUser == undefined){
        throw new UserNotFoundError(errorMessages.USER_NOT_FOUND_ERROR);
    }
    var checkPass = CryptService.checkCryptGuess(user.password, existingUser.password);
    
    if(!checkPass){
        throw new InvalidPasswordError(errorMessages.INVALID_PASSWORD_ERROR);
    }

    return existingUser.uuid;
}