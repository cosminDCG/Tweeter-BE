class Post {
    constructor(userId, text, date){
        this.userId = userId || null;
        this.text = text || null;
        this.date = date || null;
    }
}

module.exports = Post;