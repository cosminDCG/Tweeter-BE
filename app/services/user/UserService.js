const tableName = require("../../constants/TableName");
var utils = require("../../utils/Utils");

module.exports.saveUser = async (user) => {
    var users = await utils.readJSONFileByTableName(tableName.USER_TABLE);
    users.push(user);
    let result = await utils.writeJSONFile(tableName.USER_TABLE, users);
}

module.exports.getUserByEmail = async (email) => {
    let users = await utils.readJSONFileByTableName(tableName.USER_TABLE);
    return users.filter( user => user.email == email)[0];
}