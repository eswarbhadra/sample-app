'use strict';

/*var UserSchema = require('../models/User').UserSchema,
  config = require('config'),
  db = require('../datasource').getDb(config.MONGODB_URL),
  User = db.model('User', UserSchema);*/

exports.register = function(entity, callback) {
  //User.create(entity, callback);
  console.log(entity);
  callback(entity);
};