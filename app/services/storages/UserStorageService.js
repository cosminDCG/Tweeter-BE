var Constants = require('../../constants/TableName');
var dynamoDBdao = require('../../dao/DynamoDB');

module.exports.storageIsInitiated = async () => {
    tables = await dynamoDBdao.listTables();
    return tables.TableNames.includes(Config.usersTableName);
}

module.exports.storageCreate = async () => {
    return await dynamoDBdao.createTable(Constants.USER_TABLE, 'uuid', 5, 5);
}

module.exports.storageDelete = async () => {
    return await dynamoDBdao.deleteTable(Constants.USER_TABLE);
}

module.exports.getByUUID =  async (uuid) => {
    var params = {
        TableName: Constants.USER_TABLE,
        Key: {
            "uuid": uuid
        }
    }

    return (await dynamoDBdao.get(params)).Item;
}

module.exports.getByEmail = async (email) => {
    var params = {
        TableName: Constants.USER_TABLE,
        FilterExpression: "#email = :givenMail",
        ExpressionAttributeNames: {
            "#email": "email",
        },
        ExpressionAttributeValues: { ":givenMail": email }
    }

    return await dynamoDBdao.scan(params);
}

module.exports.put = async (item) => {
    var params = {
        TableName: Constants.USER_TABLE,
        Item: item
    }
    return await dynamoDBdao.put(params);
}

module.exports.delete =  async (uuid) => {
    var params = {
        TableName: Constants.USER_TABLE,
        Key: {
            "uuid": uuid
        }
    }

    return await dynamoDBdao.delete(params);
}