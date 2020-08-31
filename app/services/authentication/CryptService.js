var bcrypt = require('bcryptjs');
var Config = require('../../env/Config');

module.exports.crypt = (data) => {
    return bcrypt.hashSync(data, Config.salt);
}

module.exports.checkCryptGuess = async (data, dataToCompare) => {
    var check;
    await bcrypt.compare(data, dataToCompare).then((res) => {
        check =  res;
    })
    return check;
}