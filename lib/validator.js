'use strict';

(function () {
  module.exports = {
    'validateSwagger': validateSwagger,
    'isLocal': isLocal,
    'getResponse': getResponse
  };

  /**
   * @function validateSwagger
   * @param {string} swagger - Swagger file
   * @description Validates the swagger file (local or remote), by using sway's
   * validate.
   */
  function validateSwagger (swagger) {

  }

  /**
   * @function isLocal
   * @param {string} location - Location of the swagger file
   * @returns {boolean} Returns whether or not the swagger file provided is
   * local or if remote.
   * @description Uses [something] to determine whether or not the location
   * provided is local or remote.
   */
  function isLocal (location) {
    
  }

  /**
   * @function getResponse
   * @param {object} err - Error object.
   * @param {object} res - HTTP response object.
   * @param {null|object} body - The response body object, if present
   * @description Callback back function for the request to get a remote
   * swagger file.
   */
  function getResponse (err, res, body) {

  }
}());
