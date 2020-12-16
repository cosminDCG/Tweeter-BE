var chai = require('chai');
const assert = chai.assert;

var DynamoDB = require('../dao/DynamoDB');

var tableName = 'dummy';

describe('DynamoDB DAO Test', function() {

    it('Check no tables', async() => {
        response = await DynamoDB.listTables();
        assert(response.TableNames.includes(tableName) === false);
    })

    it('Creates a table', async() => {
        response = await DynamoDB.createTable(tableName, 'uuid', 5, 5);
        assert(response.TableDescription.TableName === tableName);
        response = await DynamoDB.listTables();
        assert(response.TableNames.includes(tableName) === true);
    })

    it('Deletes dummy table', async() => {
        response = await DynamoDB.deleteTable(tableName);
        response = await DynamoDB.listTables();
        assert(response.TableNames.includes(tableName) === false);
    })
})
