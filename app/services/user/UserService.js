const tableName = require("../../constants/TableName");
var utils = require("../../utils/Utils");

module.exports.saveUser = (user) => {
    var users = utils.readJSONFileByTableName(tableName.USER_TABLE);
    users.push(user);
    let result = utils.writeJSONFile(tableName.USER_TABLE, users);
}

module.exports.getUserByEmail =  (email) => {
    let users = utils.readJSONFileByTableName(tableName.USER_TABLE);
    return users.filter( user => user.email == email)[0];
}