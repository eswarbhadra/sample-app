'use strict';

var middleware = function(err, req, res, next) {
	res.status(err.code || 500).json(err);
};

module.exports = function() {
	return middleware;
}