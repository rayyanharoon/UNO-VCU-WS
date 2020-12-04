const {Router} = require('express');
var express = require('express');
var route = express.Router();

var controller = require('../controllers/PaymentPage-FEATURE-kzi-30');

route.post("/Payment", controller.addPayment)

module.exports = route;