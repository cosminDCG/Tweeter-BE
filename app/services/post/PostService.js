const tableName = require("../../constants/TableName");
var utils = require("../../utils/Utils");

module.exports.getAllPosts = async () => {
    let posts = await utils.readJSONFileByTableName(tableName.POST_TABLE);
    return posts;
}

module.exports.savePost = async (post) => {
    var posts = await  await utils.readJSONFileByTableName(tableName.POST_TABLE);
    posts.push(post);
    let result = await utils.writeJSONFile(tableName.POST_TABLE, posts);
}