'use strict';

var secretKey = 'testKey';
var jwt = require('jsonwebtoken');

function generateToken() {
    return Promise.resolve(jwt.sign( {test: 'Hello world!'}, secretKey ));
}

function verifyToken( token ) {
    return new Promise( function ( resolve, reject ) {
	jwt.verify( token, secretKey, function( err, decoded ) {
	    if (err) return null;
	    return decoded;
	});
    });
}

module.exports = {
   generate: generateToken,
   validate: verifyToken 
}
