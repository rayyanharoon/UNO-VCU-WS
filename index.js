const express = require('express') // - npm install -g express
const bodyParser = require('body-parser')
const {v4 : uuvid4} = require('uuid')
const cors = require('cors'); //cors module - npm install cors

//configure CORS
const corsOptions = {
    origin: "*",
    methods: "GET, POST, DELETE, PUT"
}

//Routes
var modifyRoomRoute = require('./routes/ModifyRoom-FEATURE-kzi-30');
var modifyAmenityRoute = require('./routes/ModifyAmenity-FEATURE-nta-52')
var loginRoute = require('./routes/Login-FEATURE-kzi-30');

const app = express();

const port = 8000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', modifyRoomRoute);
app.use('/', modifyAmenityRoute)
app.use('/', loginRoute);


global.rooms = [
    {roomID : "0c772516-8963-42cf-b0fe-fe27e9febacb", roomType: "single", maxCapacity: 1, status: "available 1"},
    {roomID: "29891282-fc6b-4b32-8f17-1e7daa6b135e", roomType: "double", maxCapacity: 2, status: "available 2"},
    {roomID: "d26c99d0-f5f5-4c5f-a09c-a49ec546e52c", roomType: "economyDouble", maxCapacity: 2, status: "occupied"}
]

global.amenities = [
    {amenityType: "None"},
    {amenityType: "Pool Access"},
    {amenityType: "Gym Access"},
    {amenityType: "All Inclusions"}
]


app.listen(port,() => {
    console.log(`Listening on port ${port}`);
                                            //tba dbname
    //mongoose.connect("mongodb://localhost:27017/users", {useNewUrlParser: true, useUnifiedTopology: true})

})