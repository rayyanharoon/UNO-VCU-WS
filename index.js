const express = require('express')
const bodyParser = require('body-parser')
const {v4 : uuvid4} = require('uuid')
const cors = require('cors'); //cors module

//configure CORS
const corsOptions = {
    origin: "*",
    methods: "GET, POST, DELETE, PUT"
}

var modifyRoomRoute = require('./routes/ModifyRoom-FEATURE-kzi-30');

const app = express();

const port = 8000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', modifyRoomRoute);

global.rooms = [
    {roomID : "0c772516-8963-42cf-b0fe-fe27e9febacb", roomType: "single", maxCapacity: 1, status: "available 1"},
    {roomID: "29891282-fc6b-4b32-8f17-1e7daa6b135e", roomType: "double", maxCapacity: 2, status: "available 2"},
    {roomID: "d26c99d0-f5f5-4c5f-a09c-a49ec546e52c", roomType: "economyDouble", maxCapacity: 2, status: "occupied"}
]

// app.get('/ModifyRoom', (req,res)=> {
//     res.send(rooms);
// })


// app.post('/ModifyRoom', (req,res) => {
//     var newRoom = {roomID: req.body.roomID, roomType: req.body.roomType, maxCapacity: req.body.maxCapacity, status: req.body.status}
//     console.log("Added Room:")
//     console.log(newRoom);
//     rooms.push(newRoom);
//     res.send(rooms);
// })

// app.put ('/ModifyRoom', (req, res) => {
//     var idToUpdate = req.body.roomID;
//     rooms.forEach(room => {
//         if(room.roomID == idToUpdate)
//         {
//             room.roomType = req.body.roomType;
//             room.maxCapacity = req.body.maxCapacity;
//             room.status = req.body.status;
//             res.send(rooms);
//         }
//     });
// })

// app.delete('/ModifyRoom',(req, res) => {
//     var idToDelete = req.body.roomID;
//     rooms = rooms.filter((room) => room.roomID != idToDelete);
//     res.send(rooms);
// })



app.listen(port,() => {
    console.log(`Listening on port ${port}`);
})