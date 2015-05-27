'use strict';

var middleware = function(req, res, next) {
	// authenticaiton logic
	if(req.headers('Authorization')) {
		next();
	} else {
		next({code: 401, message: 'You are not authorized to perform this operation'})
	}
};

module.exports = function(options) {
	// do some configuration and then retrun middleware function
	if(options.debug) {
		console.log('I am returning a middleware');
	}
	return middleware;
}