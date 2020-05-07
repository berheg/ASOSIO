class HttpError extends Error {
    constructor(name, message, status, body = null) {
      super(message);
      this.name = name;
      this.message = message;
      this.httpStatus = status;
      this.body = body; // If defined, this'll be the response body
    }
  }
  
  module.exports = HttpError;