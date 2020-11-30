const {Router} = require('express');
var express = require('express');
var route = express.Router();

var controller = require('../controllers/WaitList-FEATURE-kzi-30');

route.post("/Waitlist", controller.addToWaitlist)

module.exports = route;