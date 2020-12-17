const Room = require("../models/Room-kzi-30")

exports.getRooms = async(req, res) => {
    //asyc bc db might take a while
    const rooms = await Room.find()
    res.setHeader('Content-Type', 'application/json')
    res.send(rooms);

}

exports.getRoom = async (req, res) => {
    try{
        //pull in the car from findOne, specifiy the id in the url and query by it
        const getRoom = await Room.findOne({_id: req.params.id}) 
        res.setHeader('Content-Type', 'application/json')
        res.send( req.params.id);
    } catch {
        res.status(404);
        res.send({error: "Room: " + req.params.id + " does not exist"})
    }
}

exports.createRoom = async (req, res) => {
    try {
        const newRoom = new roomSchema({
            roomType: req.body.roomType,
            maxCapacity: req.body.maxCapacity,
            status: req.body.status
        });
        await newRoom.save();
        res.setHeader('Content-Type', 'application/json')
        // res.send(newRoom);
    } catch {
        res.status(500);
        res.send({error:" could not create room, please try again"})
    }
}


exports.deleteRoom = async (req,res) => {
    console.log("delete room was called on : " + req.body.id);
    try{
        const getRoom = await Room.deleteOne({_id:req.body.id})
        res.send(getRoom);
    }catch{
        res.status(500);
        res.send({error: "Could not delete room: " + req.body.id})
    }
}

//To be improved(connect to db, itn3 version)
const editRoom = function(req,res,next){
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

