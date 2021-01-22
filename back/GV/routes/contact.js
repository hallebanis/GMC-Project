const express = require("express");
const router = express.Router();
const newContact = require("../modules/Contact");
const authMiddleware = require ("../../helpers/authMiddleware");

//Route Create Contact
//path: http://localhost:5000/api/AddContact
router.post("/AddContact", authMiddleware, (req, res) => {
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
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read Contacts
//path: http://localhost:5000/api/Contacts
router.get("/Contacts", authMiddleware, (req, res) => {
    newContact
        .find()
        .then((Contacts) => res.status(200).json(Contacts))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Contact
//path: http://localhost:5000/api/updateContact
router.put("/updateContact", authMiddleware, (req, res) => {
    const { id, nom, prenom, fonction, email, tel } = req.body;
    newContact.findByIdAndUpdate(
        id,
        { nom, prenom, fonction, email, tel },
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newContact
                .findById(req.params.id)
                .then((contact) => res.status(200).json(contact))
                .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
        }
    );
});

//Route Delete Contact
//path: http://localhost:5000/api/deleteContact/:id
router.delete("/deleteContact/:id", authMiddleware, (req, res) => {
    newContact
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ msg: "Contact Deleted" }))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
