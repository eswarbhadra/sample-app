'use strict';

/**
 * Main application init file.
 * This will spin up an HTTP SERVER which will listen on connections on port 4040
 * @author      ritesh
 * @version     1.0
 */

var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  router = require('./router'),
  errorHandler = require('./middlewares/ErrorHandler'),
  config = require('config'),
  responser = require('./middlewares/responser');

var port = 4040;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(router());
app.use(responser());
app.use(errorHandler());
app.listen(port);