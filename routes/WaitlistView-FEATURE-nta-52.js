const { Router } = require('express');
var express = require('express');
var route = express.Router();

var controller = require('../controllers/WaitlistView-FEATURE-nta-52');

//Get all the cars
//route.get("/contacts/:id", controller.getWaitlist);
route.get("/contactsList", controller.getWaitlist);
// route.post("/cars", controller.createCar);
// route.delete("/cars/:id", controller.deleteCar)

//Export the updated router
module.exports = route;