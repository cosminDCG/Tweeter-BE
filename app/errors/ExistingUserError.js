class ExistingUserError extends Error {
    constructor(message) {
        super(message);
        this.name = message;
        this.code = 402;
    }
}

module.exports = ExistingUserError;