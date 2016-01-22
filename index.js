'use strict';

/**
 * @overview A CLI tool to validate [swagger]{@link http://swagger.io/} files.
 *
 * @requires commander
 */
(function () {
  var program = require('commander');
  var validator = require('./lib/validator');

  program
    .version('0.1.0')
    .usage('<swagger file>')
    .action(validator.validateSwagger)
    .parse(process.argv);
}());
