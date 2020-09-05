class User {
    constructor(password, email){
        this.password = password || null;
        this.email = email || null;
    }
}

module.exports = User;