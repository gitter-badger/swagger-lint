'use strict';

/**
 * @overview A fully pluggable tool for identifying and reporting on patterns
 * in your {@link http://swagger.io/|Swagger} documents.
 *
 * @requires commander
 * @requires sway
 */
(function () {
  var program = require('commander');
  var sway = require('sway');

  var swaggerFile;

  program
    .version('0.1.0')
    .arguments('<file>')
    .action(function (file) {
      if (!file) {
        console.log('swagger file not provided!');
        process.exit(1);
      }

      swaggerFile = file;
    })
    .parse(process.argv);

  validateSwagger(swaggerFile);

  /**
   * @function validateSwagger
   * @param {string} location - Location of the swagger file to validate
   * @description Validates the swagger file (local or remote), by using sway's
   * validate.
   * @see {@link https://github.com/apigee-127/sway|sway}
   */
  function validateSwagger (location) {
    var SwaggerApi = sway.create({
      definition: location
    });

    SwaggerApi
      .then(function (api) {
        console.log(JSON.stringify(api.validate(), null, 2));
      });
  }
}());
