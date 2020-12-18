const {Router} = require('express');
var express = require('express');
var route = express.Router();

var controller = require('../controllers/Waitlist-FEATURE-kzi-30');

route.post("/Waitlist", controller.addToWaitlist)
route.get("/Waitlist", controller.getWaitlist)

module.exports = route;