class Post {
    constructor(tweet, userUuid){
        this.tweet = tweet || null;
        this.userUuid = userUuid || null;
    }
}

module.exports = Post;