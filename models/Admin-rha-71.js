const mongoose = require("mongoose");

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
},{
    versionKey: false
})

module.exports = mongoose.model("admin", schema);