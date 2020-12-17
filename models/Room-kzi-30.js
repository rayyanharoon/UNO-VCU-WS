const mongoose = require("mongoose")
const {usr, psw} = require('../config')

const schema = mongoose.Schema({
    roomType: String,
    maxCapacity: Number,
    status: String
}, {
    versionKey: false
})


var roomdb = mongoose.createConnection(`mongodb+srv://${usr}:${psw}@atlaslab.e3ssv.mongodb.net/rooms?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true });
const roomSchema = roomdb.model("room", schema);

module.exports = roomSchema;