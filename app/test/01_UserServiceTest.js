var chai = require('chai');
const assert = chai.assert;
var Config = require('../env/Config');
var TableName = require('../constants/TableName');
var Utils = require('../utils/Utils');

describe('User Service Test', function() {

    it('Check users table exists', async() => {
        var users = Utils.readJSONFileByTableName(TableName.USER_TABLE);
        assert(users != undefined, "Table not found!")
    })

})