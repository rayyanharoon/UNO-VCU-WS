const Admin = require("../models/Admin-rha-71")

exports.verifyLogin = function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    Admin.findOne({email: email, password: password}, function(err, admin){
        if(err) {
            console.log(err);
            return res.status(500).send({message: "login failed"});
        }
        if(!admin) {
            return res.status(404).send({message: "user not found"});
        }
        return res.status(200).send({message: "login success"});
    })
}