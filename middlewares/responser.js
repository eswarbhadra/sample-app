'use strict';

var middleware = function(req, res, next) {
	if(req.data && req.data.content) {
		res.status(req.data.statusCode).json(req.data.content);
	} else {
		res.status(req.data.statusCode || 200);
	}
}

module.exports = function() {
	return middleware;
}