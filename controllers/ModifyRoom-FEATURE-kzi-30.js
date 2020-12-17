
const Room = require("../models/Room-kzi-30")

exports.getRooms = async(req, res) => {
    //asyc bc db might take a while
    const rooms = await Room.find()
    res.setHeader('Content-Type', 'application/json')
    res.send(rooms);

}

exports.getRoom = async (req, res) => {
    try{
        const getRoom = await Room.findOne({_id: req.params.id}) 
        res.setHeader('Content-Type', 'application/json')
        res.send( req.params.id);
    } catch {
        res.status(404);
        res.send({error: "Room: " + req.params.id + " does not exist"})
    }
}

//WORKS!! DONT TOUCH
exports.createRoom = async function (req, res){
    try {
        const newRoom = new Room({
            roomType: req.body.roomType,
            maxCapacity: req.body.maxCapacity,
            status: req.body.status
        });
        await newRoom.save();
        // res.save(newRoom)
        res.send({message:"successfully created room:" + newRoom._id})
    } catch {
        res.status(500);
        res.send({error:" could not create room, please try again"})
    }
}

//WORKS! DO NOT TOUCH
//TO TEST IN REST API, ENTER "id" INSTEAD OF "_id  headers should have no ' or "" "
exports.deleteRoom = async (req,res) => {
    console.log("delete room was called on : " + req.body.id);
    try{
        const getRoom = await Room.deleteOne({_id:req.body.id})
        // res.save(getRoom);
        res.send({message: "Successfully deleted room: " + req.body.id})
    }catch{
        res.status(500);
        res.send({error: "Could not delete room: " + req.body.id})
    }
}

exports.updateRoom = async (req, res) => {
    console.log("update rooom was called on: " + req.body.id);
    try{
        const updateRoom = await  Room.updateOne(req.body.id, req.body, {new: true})
        res.send(updateRoom);
    } catch {
        res.status(500);
        res.send({error: "Could not update room: " + req.body.id})
    }

}

  //  Room.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
//     if (err) return res.status(500).send("There was a problem updating the user.");
//     res.status(200).send(user);
// });