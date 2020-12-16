var postStorage = require("../storages/PostStorageService");

module.exports.getAllPosts = async () => {
    let result = await postStorage.getAll();
    return result.Items;
}

module.exports.getPostsByUserUuid = async (userUuid) => {
    let result = await postStorage.getByUserUuid(userUuid);
    return result.Items;
}

module.exports.savePost = async (post) => {
    let result = await postStorage.put(post);
}