class InvalidPasswordError extends Error {
    constructor(message) {
        super(message);
        this.name = message;
        this.code = 405;
    }
}

module.exports = InvalidPasswordError;