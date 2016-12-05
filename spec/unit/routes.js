'use strict';

var mocha = require('mocha');
var chai  = require('chai');
var expect = chai.expect;
var should = chai.should();
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var tokenCtrl = require('../../tokenCtrl');

describe('Token generation', function() {

	describe('Generate', function() {
		it('Create new token', function( done ) {
			return tokenCtrl.generate()
			.then(function(token) { 
				console.dir(token);
				expect(token).to.has.property('iat');
				expect(token).to.has.property('test');
			})
			.should.notify(done);
		});
	});
});
