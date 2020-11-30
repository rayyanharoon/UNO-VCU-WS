const mongoose = require("mongoose")

const schema = mongoose.Schema({
    roomType: String,
    maxCapacity: Number,
    status: String
}, {
    versionKey: false
})


var roomdb = mongoose.createConnection('mongodb://localhost/rooms', {useNewUrlParser: true, useUnifiedTopology: true });
const roomSchema = roomdb.model("room", schema);

module.exports = roomSchema;