'use strict';

var mongoose = require('../datasource').getMongoose(),
  Schema = mongoose.Schema;

var UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String
});

/**
 * Module exports
 */
module.exports = {
  UserSchema: UserSchema
};