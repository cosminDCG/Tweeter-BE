var userStorage = require("../storages/UserStorageService");

module.exports.saveUser = async (user) => {
    let result = await userStorage.put(user);
}

module.exports.getUserByEmail =  async (email) => {
    let result = await userStorage.getByEmail(email);
    if(result.Items != undefined) {
        return result.Items[0];
    }
    return undefined;   
}