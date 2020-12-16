var AWS = require("aws-sdk");

// dynamodb reference 
var AWSObj = require('../env/AWSObj');
var AWSConfig = AWSObj.getInstance();
var dynamodb = AWSConfig.getDynamoDb();
var docClient = AWSConfig.getDocClient();

// some utility functions 
var Utils = require('../utils/Utils');

module.exports.createTable = async (table, key, readCapacity, writeCapacity) => {
    var params = {
        TableName: table,
        KeySchema: [ 
            { 
                AttributeName: key,
                KeyType: 'HASH',
            },
        ],
        AttributeDefinitions: [ 
            {
                AttributeName: key,
                AttributeType: 'S', 
            }
        ],
        ProvisionedThroughput: {
            ReadCapacityUnits: readCapacity, 
            WriteCapacityUnits: writeCapacity, 
        }
    };

    return await Utils.invokeCallbackFunction(dynamodb, dynamodb.createTable, params);
    
}


module.exports.listTables = async () => {
    var params = {
        Limit: 10
    };
    return await Utils.invokeCallbackFunction(dynamodb, dynamodb.listTables, params);
}

module.exports.deleteTable = async (table) => {
    var params = {
        TableName: table,
    };

    return await Utils.invokeCallbackFunction(dynamodb, dynamodb.deleteTable, params);
}

module.exports.update = async (params) => {
    return await Utils.invokeCallbackFunction(docClient, docClient.update, params);
} 

module.exports.put = async (params) => {
    return await Utils.invokeCallbackFunction(docClient, docClient.put, params);
} 

module.exports.get =  async (params) => {
    return await Utils.invokeCallbackFunction(docClient, docClient.get, params);
}

module.exports.delete =  async (params) => {
    return await Utils.invokeCallbackFunction(docClient, docClient.delete, params);
}

module.exports.scan = async (params) => {
    return await Utils.invokeCallbackFunction(docClient, docClient.scan, params);
}