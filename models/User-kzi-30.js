const mongoose = require("mongoose")

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
},{
    versionKey: false //Turn mongoose versioning off
})

module.exports = mongoose.model("user", schema);