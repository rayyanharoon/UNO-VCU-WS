
const {v4 : uuvid4} = require('uuid')

const addRoom = function(req,res,next){
    var newRoom = {roomID: uuvid4(), roomType: req.body.roomType, maxCapacity: req.body.maxCapacity, status: req.body.status}
    res.setHeader('Content-type','application/json')
    console.log("Added Room:")
    console.log(newRoom);
    rooms.push(newRoom)
    res.send(rooms);
}

const getRooms = function(req,res,next){
    res.send(rooms);
}

const modifyRoom = function(req,res,next){
    var idToUpdate = req.body.roomID;
    res.setHeader('Content-type','application/json')

    rooms.forEach(room => {
        if(room.roomID == idToUpdate)
        {
            room.roomType = req.body.roomType;
            room.maxCapacity = req.body.maxCapacity;
            room.status = req.body.status;
            res.send(rooms);
        }
    });
    
}

const deleteRoom = function(req,res,next){
    res.setHeader('Content-type','application/json')

    var idToDelete = req.body.roomID;
    rooms = rooms.filter((room) => room.roomID != idToDelete);
    res.send(rooms);
}


module.exports ={
    getRooms,
    addRoom,
    modifyRoom,
    deleteRoom
}