
const ContactKzi30 = require("../models/Contact-kzi-30");

exports.getContacts = async (req, res) => {
    // try {
    //     const getContacts = await Contacts.findOne({ _id: req.params.id })
    //     res.send(getCar);
    // } catch {
    //     res.status(404);
    //     res.send({ error: "Car does not exist: " + req.params.id })
    // }
    res.send(ContactKzi30)
};