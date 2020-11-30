const mongoose = require("mongoose")

const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
},{
    versionKey: false //Turn mongoose versioning off
})

                //create new connection                      //db name
const userdb = mongoose.createConnection('mongodb://localhost/users', {useNewUrlParser: true, useUnifiedTopology: true });
const userschema = userdb.model("user", schema);
                //export schema
module.exports = userschema;