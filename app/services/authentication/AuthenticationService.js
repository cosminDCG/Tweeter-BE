var CryptService = require('./CryptService');
var JWTService = require('../JWTService');
var userService = require('../user/UserService');
var Util = require('../../utils/Utils');

var userValidator = require('../../validators/UserValidator');

module.exports.register = async (user) => {
    await userValidator.validateRegister(user);

    user.uuid = Util.generateUUID(user.email);
    user.password = CryptService.crypt(user.password);

    await userService.saveUser(user);
    var token = JWTService.generateToken(user.uuid);
    return token;
}

module.exports.login = async (user) => {
    var uuid = await userValidator.validateLogin(user);

    var token = JWTService.generateToken(uuid);
    return token;
}