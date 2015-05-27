'use strict';

var express = require('express');
var auth = require('./middlewares/auth');
var UserController = require('./controllers/UserController');

module.exports = function() {
  var options = {
    caseSensitive: true
  };

  // Instantiate an isolated express Router instance
  var router = express.Router(options);
  router.post('/register', UserController.register);
  router.post('/login', UserController.login);
  router.put('/updateProfile', auth({debug: true}), UserController.update);
  return router;
}