const tableName = require("../../constants/TableName");
var utils = require("../../utils/Utils");

module.exports.getAllPosts = () => {
    let posts = utils.readJSONFileByTableName(tableName.POST_TABLE);
    return posts;
}

module.exports.savePost = (post) => {
    var posts = utils.readJSONFileByTableName(tableName.POST_TABLE);
    posts.push(post);
    let result = utils.writeJSONFile(tableName.POST_TABLE, posts);
}