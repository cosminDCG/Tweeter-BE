var Constants = require('../../constants/TableName');
var dynamoDBdao = require('../../dao/DynamoDB');

module.exports.storageIsInitiated = async () => {
    tables = await dynamoDBdao.listTables();
    return tables.TableNames.includes(Config.usersTableName);
}

module.exports.storageCreate = async () => {
    return await dynamoDBdao.createTable(Constants.POST_TABLE, 'uuid', 5, 5);
}

module.exports.storageDelete = async () => {
    return await dynamoDBdao.deleteTable(Constants.POST_TABLE);
}

module.exports.put = async (item) => {
    var params = {
        TableName: Constants.POST_TABLE,
        Item: item
    }
    return await dynamoDBdao.put(params);
}

module.exports.getAll = async () => {
    var params = {
        TableName: Constants.POST_TABLE,
    }

    return await dynamoDBdao.scan(params);
}

module.exports.getByUserUuid = async (userUuid) => {
    var params = {
        TableName: Constants.POST_TABLE,
        FilterExpression: "#userUuid = :givenUserUuid",
        ExpressionAttributeNames: {
            "#userUuid": "userUuid",
        },
        ExpressionAttributeValues: { ":givenUserUuid": userUuid }
    }

    return await dynamoDBdao.scan(params);
}