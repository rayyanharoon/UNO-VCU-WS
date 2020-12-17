//We need all the Express things
const { Router } = require('express');
var express = require('express');
var route = express.Router();

//Require controller for the route
var controller = require('../controllers/ModifyRoom-FEATURE-kzi-30');

route.post('/ModifyRoom', controller.createRoom);
route.get('/ModifyRoom', controller.getRooms);
// route.get('/ModifyRoom', controller.getRoom);
route.put('/ModifyRoom', controller.updateRoom);
route.delete('/ModifyRoom', controller.deleteRoom);


//export the route
module.exports = route;