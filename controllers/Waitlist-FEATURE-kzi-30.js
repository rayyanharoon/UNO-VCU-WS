

const Contact = require("../models/Contact-kzi-30")
exports.addToWaitlist = async function (req, res, next){
   try {
       const newContact = new Contact({
           name: req.body.name,
           email: req.body.email,
           phone: req.body.phone,
           address: req.body.address
       });
       await newContact.save();
    //    res.save(newContact);
       res.send({message: "successfully added: " + newContact._id + " to the contacts db"})
   }catch{
       res.status(500);
       res.send({error: "Could not add contact"})
   }
}

exports.getWaitlist = async function (req,res) {
    const contacts = await Contact.find()
    res.setHeader('Content-Type', 'application/json')
    res.send(contacts);

}