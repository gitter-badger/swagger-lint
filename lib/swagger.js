'use strict';

(function () {
  module.exports = {
    'validate': validate
  };

  var sway = require('sway');

  /**
   * @function validater
   * @memberOf swagger-lint
   * @param {string} location - Location of the swagger file to validate
   * @description Validates the swagger file (local or remote), by using sway's
   * validate.
   */
  function validate (location) {
    var SwaggerApi = sway.create({
      definition: location
    });

    SwaggerApi.then(handleSuccess, handleFailure);
  }

  /**
   * @function handleSuccess
   * @memberOf swagger-lint
   * @param {object} api - The results object returned from sway's 
   * validation.
   * @description Prints the results to stdout, removing the JSON formatting.
   */
  function handleSuccess (api) {
    var results = api.validate();
    var errors = results.errors;
    var warnings = results.warnings;

    console.log('Found', errors.length, 'error(s)');
    reportResults(errors);

    console.log('Found', warnings.length, 'warning(s)');
    reportResults(warnings);
  }

  /**
   * @function handleFailure
   * @param {string} err - Error returned from sway's validation.
   * @description Prints the error to stdout.
   */
  function handleFailure (err) {
    console.log(err);
  }

  /**
   * @function reportResults
   * @param {array} results - Prints the results out without JSON formatting.
   * @description Prints the results array passed to it. Can be used for
   * printing the error or warning blocks.
   */
  function reportResults (results) {
    results.forEach(function (result) {
      console.log('  ', result.code);
      console.log('  ', result.message);
      console.log('  ', result.path);
      console.log();
    });
  }
}());
