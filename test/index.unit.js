'use strict';

(function () {
  var expect = require('chai').expect;
  var validator = require('../lib/validator');

  describe('Running slint', function () {
    var spawn = require('child_process').spawn;

    before(function () {
      spawn('npm', ['link']);
    });

    it('should return an exit code 0 if valid', function (done) {
      var slint = spawn('slint', ['sample-swagger.json']);

      slint.on('close', function (code) {
        expect(code).to.equal(0);
        done();
      });
    });

    it('should return a non-zero exit code if invalid', function (done) {
      var slint = spawn('slint', ['INVALID\ FILE']);

      slint.on('close', function (code) {
        expect(code).to.not.equal(0);
        done();
      });
    });

    it('should display usage if not given a swagger file', function (done) {
      var slint = spawn('slint');
      var output;

      slint.stdout.on('data', function (data) {
        output = data.toString('utf8');
      });

      slint.on('close', function (code) {
        expect(output).to.contain('Usage:');
        done();
      });
    });

    it('should display help if given the --help option', function (done) {
      var slint = spawn('slint', ['--help']);

      slint.stdout.on('data', function (data) {
        var output = data.toString('utf8');

        expect(output).to.contain('Usage:');
        done();
      });
    });

    it('should display help if given the -h option', function (done) {
      var slint = spawn('slint', ['-h']);

      slint.stdout.on('data', function (data) {
        var output = data.toString('utf8');

        expect(output).to.contain('Usage:');
        done();
      });
    });

    it('should display the version if given the --version option', function (done) {
      var slint = spawn('slint', ['--version']);

      slint.stdout.on('data', function (data) {
        var output = data.toString('utf8');

        expect(output).to.match(/^\d{1}\.\d{1}\.\d{1}/);
        done();
      });
    });

    it('should display the version if given the -V option', function (done) {
      var slint = spawn('slint', ['-V']);

      slint.stdout.on('data', function (data) {
        var output = data.toString('utf8');

        expect(output).to.match(/^\d{1}\.\d{1}\.\d{1}/);
        done();
      });
    });
  });

  describe('The "validateSwagger" function', function () {
    it('should validate a local swagger file', function () {
      
    });

    it('should validate a remote swagger file', function () {

    });
  });

  describe('The "isLocal" function', function () {
    it('should return true if the location is a filesystem location', function () {
      var local = validator.isLocal('./sample-swagger.json');

      expect(local).to.be(true);
    });

    it('should return false if the location is a url', function () {
      var remote = validator.isLocal('http://petstore.swagger.io/v2/swagger.json');

      expect(remote).to.be(false);
    });
  });

  describe('The "getResponse" function', function () {
    it('should error if present', function () {

    });

    it('should error if the status code is not 200', function () {

    });

    it('should not error if status code is 200', function () {

    });

    it('should read the response body if present', function () {

    });
  });
}());
