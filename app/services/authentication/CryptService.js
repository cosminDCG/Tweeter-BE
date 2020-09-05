var bcrypt = require('bcryptjs');
var Config = require('../../env/Config');

module.exports.crypt = (data) => {
    return bcrypt.hashSync(data, Config.salt);
}

module.exports.checkCryptGuess = (data, dataToCompare) => {
    var check = bcrypt.compareSync(data, dataToCompare)
    return check;
}