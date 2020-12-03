

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
},{
    versionKey:false
})

module.exports = mongoose.model("contacts", schema);