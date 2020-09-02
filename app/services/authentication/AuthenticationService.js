var CryptService = require('./CryptService');
var JWTService = require('../JWTService');
var userService = require('../user/UserService');
var Util = require('../../utils/Utils');

var userValidator = require('../../validators/UserValidator');

module.exports.register = async (user) => {
    userValidator.validateRegister(user);

    user.password = CryptService.crypt(user.password);
    user.uuid = Util.generateUUID(user.email);

    await userService.saveUser(user);
    var token = JWTService.generateToken(user.uuid);
    return token;
}

module.exports.login = async (user) => {
    var uuid = userValidator.validateLogin(user);

    var token = JWTService.generateToken(uuid);
    return token;
}