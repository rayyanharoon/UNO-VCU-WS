

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
var contactdb = mongoose.createConnection('mongodb://localhost/contacts', {useNewUrlParser: true, useUnifiedTopology: true });
const contactSchema = contactdb.model("contact", schema);

module.exports = contactSchema;

