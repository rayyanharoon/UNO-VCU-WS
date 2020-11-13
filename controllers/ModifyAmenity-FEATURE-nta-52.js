const { readdirSync } = require("fs")

const getAmenity = function(req, res, next) {
    res.setHeader('Content-type', 'application/json');
    res.send(amenities)
}

// exports.addAmenity = function(req, res, next) {
//     res.setHeader('Content-type', 'application/json');
//     res.send(JSON.stringify())
// }

const updateAmenity = function(req, res, next) {
    var updateAmenityType = req.body.amenityType;
    res.setHeader('Content-type', 'application/json');
    amenity = amenities.map((amenity) => {amenity.amenityType == updateAmenityType})
    res.send(amenities)
}

module.exports = {
    getAmenity,
    updateAmenity
}