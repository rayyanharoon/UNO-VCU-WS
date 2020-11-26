//We need all the Express things
const { Router } = require('express');
var express = require('express');
var route = express.Router();

//Require controller for the route
var controller = require('../controllers/BookRooms-FEATURE-rha-71');

route.get('/BookRooms', controller.getRoom);

//export the route
module.exports = route;