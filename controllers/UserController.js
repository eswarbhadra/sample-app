'use strict';

var userService = require('../services/UserService');

exports.register = function(req, res, next) {
  var entity = req.body;

  if(!entity.firstName || !entity.email) {
    next({code: 400, message: 'First name or email address cannot be null or empty'});
  }
  userService.register(entity, function(err,response){
    if(err){
        return next(err);
    }

    req.data = { statusCode: 201,
                 content: response
               };
    next();
  });
};

exports.login = function(req, res, next) {
  var entity = req.body;

  if(!entity.email || !entity.password) {

    next({code: 400, message: 'Email address or password cannot be null or empty'});
  }
  userService.login(entity, function(err,response){
    if(response == null){
      next({code: 404, message: 'Resource not found'});
    }

    if(err){
      return next(err);
    }
    req.data = { statusCode: 200,
                 content: response
               };
    next();
  });
};

exports.update = function(req, res, next) {

}