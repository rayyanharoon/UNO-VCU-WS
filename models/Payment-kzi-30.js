

const mongoose = require("mongoose")

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: Number,
    paymentMethod: String
},{
    versionKey:false
})

module.exports = mongoose.model("payment", schema);
var contactdb = mongoose.createConnection('mongodb://localhost/payments', {useNewUrlParser: true, useUnifiedTopology: true });
const contactSchema = contactdb.model("payment", schema);

module.exports = contactSchema;

