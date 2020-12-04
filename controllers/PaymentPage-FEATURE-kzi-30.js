

const Payment = require("../models/Payment-kzi-30")
exports.addToWaitlist = async function (req, res, next){
   try {
       const newPayment = new Contact({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
           email: req.body.email,
           phone: req.body.phone,
           address: req.body.address
       });
       await newPayment.save();
       res.save(newPayment);
       res.send({message: "added contact to waitlist"})
   }catch{
       res.status(500);
       res.send({error: "Could not add contact"})
   }
}