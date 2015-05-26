'use strict';

var userService = require('../services/UserService');

exports.register = function(req, res, next) {
  userService.register(req.body, next);
};