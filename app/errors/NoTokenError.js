class NoTokenError extends Error {
    constructor(message) {
        super(message);
        this.name = message;
        this.code = 404;
    }
}

module.exports = NoTokenError;