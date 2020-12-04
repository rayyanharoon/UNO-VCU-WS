

const Payment = require("../models/Payment-kzi-30")
exports.addPayment = async function (req, res, next){
   try {
       const newPayment = new Payment({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
           email: req.body.email,
           address: req.body.address,
           phone: req.body.phone,
           paymentMethod: req.body.paymentMethod
       });
       await newPayment.save();
       res.save(newPayment);
       res.send({message: "added contact to waitlist"})
   }catch{
       res.status(500);
       res.send({error: "Could not add contact"})
   }
}