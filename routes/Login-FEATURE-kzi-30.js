
const {Router} = require('express');
var express = require('express');
var route = express.Router();

var controller = require('../controllers/Login-FEATURE-kzi-30');

route.post('/Login', controller.verifyLogin);

module.exports = route;