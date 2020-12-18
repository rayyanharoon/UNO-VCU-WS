
const {usr, psw} = require('../config')
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
},{
    versionKey:false
})

// module.exports = mongoose.model("contacts", schema);
var contactdb = mongoose.createConnection(`mongodb+srv://${usr}:${psw}@atlaslab.e3ssv.mongodb.net/contacts?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true });
const contactSchema = contactdb.model("contact", schema);

module.exports = contactSchema;

