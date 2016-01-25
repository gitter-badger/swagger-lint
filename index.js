'use strict';

/**
 * @namespace swagger-lint
 * @description A fully pluggable tool for identifying and reporting on patterns
 * in your {@link http://swagger.io/|Swagger} documents.
 *
 * @requires commander
 * @requires sway
 * @requires fs
 */
(function () {
  var program = require('commander');

  var fs = require('fs');
  var url = require('url');
  var swagger = require('./lib/swagger');
  var swaggerFile;

  program
    .version('0.1.0')
    .arguments('<file>')
    .action(function (file) {
      // check to see if this a local or remote file
      var protocol = url.parse(file).protocol;

      // if local and it doesn't exist, throw an error
      if (protocol === null && !fs.existsSync(file)) {
        console.log('  Unable to find', file);
        helpOnError(1);
      }

      swaggerFile = file;
    })
    .parse(process.argv);
  
  if (!swaggerFile) {
    helpOnError(2);
  }

  swagger.validate(swaggerFile);

  /**
   * @function helpOnError
   * @memberOf swagger-lint
   * @param {int} code - Exit status code
   * @description Displays the program's help and exits with the code passed to
   * it, or -1 if not passed.
   */
  function helpOnError (code) {
    program.outputHelp();
    process.exit(code || -1);
  }
}());
