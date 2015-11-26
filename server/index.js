'use strict'

let System = require('jspm').Loader();

System.import('./server/server')
	.catch(function (err) {
		console.log(err);
	});
