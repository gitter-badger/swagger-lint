'use strict';

(function () {
  var swagger = require('../lib/swagger');

  var chai = require('chai');
  var expect = chai.expect;
  var sinon = require('sinon');
  var sinonChai = require('sinon-chai');

  chai.use(sinonChai);

  describe('swagger.js', function () {
    describe('handleSuccess', function () {
      var validateStub = sinon.stub();

      before(function () {
        var api = {
          'validate': validateStub
        };

        validateStub.returns({
          'errors': [],
          'warnings': []
        });

        swagger.handleSuccess(api);
      });

      it('should call validate on the swagger api', function () {
        expect(validateStub).to.be.called.once;
      });
    });

    describe('handleFailure', function () {
      var consoleSpy;

      before(function () {
        consoleSpy = sinon.spy(console, 'log');
        swagger.handleFailure('ERROR');
      });

      it('should log the error', function () {
        expect(consoleSpy).to.be.calledWith('ERROR');
      });

      after(function () {
        console.log.restore();
      });
    });

    describe('reportResults', function () {
      var consoleSpy;
      var results = [
        {
          'code': 'MOCK CODE',
          'message': 'MOCK MESSAGE',
          'path': [
            'MOCK PATH'
          ]
        }
      ];

      before(function () {
        consoleSpy = sinon.spy(console, 'log');
        swagger.reportResults(results);
      });

      it('should log the code', function () {
        expect(consoleSpy).to.be.calledWith('   MOCK CODE');
      });

      it('should log the message', function () {
        expect(consoleSpy).to.be.calledWith('   MOCK MESSAGE');
      });

      it('should log the path', function () {
        expect(consoleSpy).to.be.calledWith('   MOCK PATH');
      });

      after(function () {
        console.log.restore();
      });
    });
  });
}());
