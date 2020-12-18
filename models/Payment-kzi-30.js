
const mongoose = require("mongoose")
const {usr, psw} = require('../config')

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address: String,
    phone: Number,
    paymentMethod: String
}, {
    versionKey:false
})

const paymentInfodb = mongoose.createConnection(`mongodb+srv://${usr}:${psw}@atlaslab.e3ssv.mongodb.net/payments?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true });
const paymentInfoSchema = paymentInfodb.model("payment",schema);

module.exports = paymentInfoSchema;



