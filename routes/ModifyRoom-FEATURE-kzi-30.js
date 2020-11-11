//We need all the Express things
const { Router } = require('express');
var express = require('express');
var route = express.Router();

//Require controller for the route
var controller = require('../controllers/ModifyRoom');

route.post('/ModifyRoom', controller.addRoom);
route.get('/ModifyRoom', controller.getRooms);
route.put('/ModifyRoom', controller.modifyRoom);
route.delete('/ModifyRoom', controller.deleteRoom);


//export the route
module.exports = route;