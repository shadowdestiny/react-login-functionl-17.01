/**
 * @typedef ExceptionResponse
 * @property {string} errorMessage
 * @property {string} requestedURI
 * @property {string} details
 */
export default class ExceptionResponse {

    constructor(errorMessage, requestedURI, details) {
        this.errorMessage=errorMessage;
        this.requestedURI=requestedURI;
        this.details=details;

    }
}
