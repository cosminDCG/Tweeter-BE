var CryptService = require('./CryptService');
var JWTService = require('../JWTService');
var userService = require('../user/UserService');
var Util = require('../../utils/Utils');

var userValidator = require('../../validators/UserValidator');

module.exports.register = (user) => {
    userValidator.validateRegister(user);

    user.uuid = Util.generateUUID(user.email);
    user.password = CryptService.crypt(user.password);

    userService.saveUser(user);
    var token = JWTService.generateToken(user.uuid);
    return token;
}

module.exports.login = (user) => {
    var uuid = userValidator.validateLogin(user);

    var token = JWTService.generateToken(uuid);
    return token;
}