const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    address: String
},
{
    versionKey:false
})

module.exports = mongoose.model("contactsList", schema);
var contactdb = mongoose.createConnection('mongodb://localhost/contactsList', {useNewUrlParser: true, useUnifiedTopology: true });
const contactsList = contactdb.model("contactsList", schema);

module.exports = contactsList;

//for viewing waitlist
//mongoose.connect("mongodb://localhost:27017/contacts", {useNewUrlParser: true, useUnifiedTopology: true})

//mongo "mongodb+srv://atlaslab09-nta-52.lg6qi.mongodb.net/<dbname>" --username atlas-lab-nta-52