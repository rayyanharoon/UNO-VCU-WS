const {Router} = require('express')
var express = require('express')
var route = express.Router()

var controller = require('../controllers/ModifyAmenity-FEATURE-nta-52')

route.get('/modifyamenity', controller.getAmenity)
// route.post('/modifyamenity', controller.addAmenity)
route.put('/modifyamenity', controller.updateAmenity)

module.exports = route;