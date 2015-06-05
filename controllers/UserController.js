'use strict';

var userService = require('../services/UserService');

exports.register = function(req, res, next) {
  console.log("register");
	var entity = req.body;

	if(!entity.firstName || !entity.email) {
		next({code: 400, message: 'First name or email address cannot be null or empty'});
	}
  userService.register(entity, function(err,res){
    if(err){
        return next(err);
    }

    req.data = {statusCode:201,
                content:res
              };
                  next();
  });
};

exports.login = function(req, res, next) {

};

exports.update = function(req, res, next) {

}