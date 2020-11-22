
const User = require("../models/User-kzi-30") //Added the model



exports.verifyLogin = function(req,res){
  var email = req.body.email;
  var password = req.body.password;
    User.findOne({email: email, password: password}, function(err, user){
        if(err){
            console.log(err);
            return res.status(500).send({message: "login failed"});
        }
        if(!user){
            return res.status(404).send({message: "user not found"});
        }
        return res.status(200).send({message: "login success"});
    })
}