const express = require('express') // - npm install -g express
const bodyParser = require('body-parser')
const {v4 : uuvid4} = require('uuid')
const cors = require('cors'); //cors module - npm install cors
const mongoose = require('mongoose')
//configure CORS
const corsOptions = {
    origin: "*",
    methods: "GET, POST, DELETE, PUT"
}

//Routes
var modifyRoomRoute = require('./routes/ModifyRoom-FEATURE-kzi-30');
var modifyAmenityRoute = require('./routes/ModifyAmenity-FEATURE-nta-52')
var loginRoute = require('./routes/Login-FEATURE-kzi-30');
var waitlistRoute = require('./routes/WaitList-FEATURE-kzi-30');
var waitlistviewRoute = require('./routes/WaitlistView-FEATURE-nta-52')

const app = express();

const port = 8000;

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/', modifyRoomRoute);
app.use('/', modifyAmenityRoute)
app.use('/', loginRoute);
app.use('/', waitlistRoute);
app.use('/', waitlistviewRoute);

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

    //for waitlist
    mongoose.connect('mongodb://localhost:27017/contacts', {useNewUrlParser: true, useUnifiedTopology: true})

})