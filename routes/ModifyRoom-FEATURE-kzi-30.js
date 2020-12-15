//We need all the Express things
const { Router } = require('express');
var express = require('express');
var route = express.Router();

//Require controller for the route
var controller = require('../controllers/ModifyRoom-FEATURE-kzi-30');

route.post('/modifyroom-kzi-30', controller.createRoom);
// route.get('/modifyroom-kzi-30', controller.getRoom);
route.get('/modifyroom-kzi-30', controller.getRooms);
// route.put('/modifyroom-kzi-30', controller.modifyRoom);
route.delete('/modifyroom-kzi-30', controller.deleteRoom);


//export the route
module.exports = route;