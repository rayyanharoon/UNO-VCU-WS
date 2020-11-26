const {v4 : uuvid4} = require('uuid')

const getRooms = function(req, res, next)   {
    res.setHeader('Content-Type','application/json');
    res.send(rooms);
}

module.exports ={
    getRooms
}