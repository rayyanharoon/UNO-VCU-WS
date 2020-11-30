const {Router} = require('express')
var express = require('express')
var route = express.Router()

var controller = require('../controllers/ModifyAmenity-FEATURE-nta-52')

route.get('/ModifyAmenity-nta-52', controller.getAmenity)
// route.post('/modifyamenity', controller.addAmenity)
route.put('/ModifyAmenity-nta-52', controller.updateAmenity)

module.exports = route;