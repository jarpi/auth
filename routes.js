'use strict'; 

var express = require('express');
var router = express.Router();
var tokenCtrl = require('./tokenCtrl.js');

router.get('/', function( req, res, next ) { 
	res.status(200).send('Hello world!');
});	

router.get('/generateToken', function( req, res, next) { 
	return tokenCtrl.generate()
	.then(function(token) {
	    res.status(200).send(token);
	})
	.catch( function ( err ) { 
		res.status(401).send({error: 'Unauthorized'});
	});
});

router.post('/validateToken', function ( req, res, next ) { 
	var token = req.headers['bearer'] || null;
	if (!token) res.status(401).send({error: 'Invalid or no token'});
	return tokenCtrl.verify( token )
	.then(function ( decoded ) { 
		console.dir( decoded );
		res.status(200).send(decoded);
	})
	.catch(function( err ) {
	   return res.status(400).send({error: 'Invalid token'});
	});
	/* jwt.verify( token, secretKey, function( err, data ) { 
		if (err) res.status(400).send({error: 'Invalid token'});
		console.dir(data);
		res.status(200).send(data);
	}); */
});

module.exports = router;
