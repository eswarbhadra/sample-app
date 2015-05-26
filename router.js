'use strict';

var express = require('express');
var UserController = require('./controllers/UserController');


module.exports = function() {
  var options = {
    caseSensitive: true
  };
  // Instantiate an isolated express Router instance
  var router = express.Router(options);
  router.post('/register', UserController.register);
  return router;
}