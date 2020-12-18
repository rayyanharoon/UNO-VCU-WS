const {Router} = require('express');
var express = require('express');
var route = express.Router();

var controller = require('../controllers/PaymentPage-FEATURE-kzi-30');

route.post("/Payment", controller.addPayment)
route.get('/Payment', controller.getPaymentInformation)

module.exports = route;