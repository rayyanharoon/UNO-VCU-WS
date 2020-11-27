
const Car = require("../models/Contact-kzi-30") //Added the model


exports.getContacts = async (req, res) => {
    try {
        const getContacts = await C.findOne({ _id: req.params.id })
        res.send(getCar);
    } catch {
        res.status(404);
        res.send({ error: "Car does not exist: " + req.params.id })
    }
};