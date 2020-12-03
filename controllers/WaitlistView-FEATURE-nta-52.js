
const waitlistview = require("../models/WaitlistView-nta-52");

exports.getWaitlist = async (req, res) => {
    // try {
    //     const getContacts = await Contacts.findOne({ _id: req.params.id })
    //     res.send(getCar);
    // } catch {
    //     res.status(404);
    //     res.send({ error: "Car does not exist: " + req.params.id })
    // }
    res.send(waitlistview)
};