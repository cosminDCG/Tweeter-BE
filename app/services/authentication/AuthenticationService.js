var CryptService = require('./CryptService');
var JWTService = require('../JWTService');
var userService = require('../user/UserService');
var Util = require('../../utils/Utils');

var ExistingUserError = require('../../errors/ExistingUserError');
var InvalidPasswordError = require('../../errors/InvalidPasswordError');
var UserNotFoundError = require('../../errors/UserNotFoundError');

module.exports.register = async (user) => {
    var existingUser = await userService.getUserByEmail(user.email);
    if(existingUser != undefined){
        throw new ExistingUserError("User alredy registered!");
    }
    
    user.password = CryptService.crypt(user.password);
    user.uuid = Util.generateUUID(user.email);

    await userService.saveUser(user);
    var token = JWTService.generateToken(user.uuid);
    return token;
}

module.exports.login = async (user) => {
    var existingUser = await userService.getUserByEmail(user.email);
    if(existingUser == undefined){
        throw new UserNotFoundError("We couldn't find the user!");
    }
    var checkPass = CryptService.checkCryptGuess(user.password, existingUser.password);
    
    if(!checkPass){
        throw new InvalidPasswordError("Wrong password!");
    }
    
    var token = JWTService.generateToken(existingUser.uuid);
    return token;
}