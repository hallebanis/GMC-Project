const express = require("express");
const router = express.Router();
const newContact = require("../modules/Contact");

//Route Create Contact
router.post("/AddContact", (req, res) => {
    const { nom, prenom, fonction, email, tel, entrepriseId } = req.body;
    let ContactModel = new newContact({
        nom,
        prenom,
        fonction,
        email,
        tel,
        entrepriseId,
    });
    ContactModel.save()
        .then((contact) => res.status(200).json(contact))
        .catch((err) => res.status(400).json(err));
});

//Route Read Contacts
router.get("/Contacts", (req, res) => {
    newContact
        .find()
        .then((Contacts) => res.json(Contacts))
        .catch((err) => console.log(err.message));
});

//Route Update Contact
router.put("/updateContact/:id", (req, res) => {
    newContact.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        (err, data) => {
            if (err) {
                throw err;
            }
            newContact
                .findById(req.params.id)
                .then((contact) => res.json(contact))
                .catch((err) => console.log(err.message));
        }
    );
});

//Route Delete Contact
router.delete("/deleteContact/:id", (req, res) => {
    newContact
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Contact Deleted" }))
        .catch((err) => console.log(err.message));
});

module.exports = router;
