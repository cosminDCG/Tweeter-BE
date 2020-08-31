var jwt = require('jsonwebtoken');
var Config = require('../env/Config');

module.exports.generateToken = async (key) => {
    var token = jwt.sign({ uuid: key }, Config.jwtSecretKey, { expiresIn: Config.expireTime });
    return token;
}

module.exports.verifyToken = async (token) => {
    var uuid;
    jwt.verify(token, Config.jwtSecretKey, (err, decoded) => {
        if(err){
            return err;
        }
        uuid =  decoded.uuid;
    })

    return uuid;
}