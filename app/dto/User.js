class User {
    constructor(firstName, lastName, password, email){
        this.firstName = firstName || null;
        this.lastName = lastName || null;
        this.password = password || null;
        this.email = email || null;
    }
}

module.exports = User;