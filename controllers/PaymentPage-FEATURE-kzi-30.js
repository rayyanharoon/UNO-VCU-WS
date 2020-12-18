

const Payment = require("../models/Payment-kzi-30")
exports.addPayment = async function (req,res) {
    try{
        const newPayment = new Payment({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
            paymentMethod: req.body.paymentMethod
        });
        await newPayment.save();
        // res.save(newPayment);
        res.send({message:"Payment " + newPayment._id+"has been processed"})
    } catch {
        res.status(500);
        res.send({error: "Could not process payment at the moment."})
    }
}

exports.getPaymentInformation = async function(req,res){
    const paymentInfo = await Payment.find()
    res.setHeader('Content-Type', 'application/json')
    res.send(paymentInfo);
}

