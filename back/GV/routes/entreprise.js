const express = require("express");
const router = express.Router();
const newEntreprise = require("../modules/Entreprise");
const authMiddleware = require ("../../helpers/authMiddleware");
//Route Create Entreprise
//path: http://localhost:5000/api/AddEntreprise
router.post("/AddEntreprise", authMiddleware, (req, res) => {
    const { matricule, tel, email,contactId } = req.body;
    let EntrepriseModel = new newEntreprise({
        matricule,
        tel,
        email,
        contactId
    });
    EntrepriseModel.save()
        .then((entreprise) => res.status(200).json(entreprise))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read Entreprises
//path: http://localhost:5000/api/Entreprises
router.get("/Entreprises", authMiddleware, (req, res) => {
    newEntreprise
        .find()
        .then((Entreprises) => res.status(200).json(Entreprises))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update Entreprise
//path: http://localhost:5000/api/updateEntreprise
router.put("/updateEntreprise", authMiddleware, (req, res) => {
    const {id,matricule,tel,email} =req.body;
    newEntreprise.findByIdAndUpdate(
        id,
        { matricule,tel,email},
        (err, data) => {
            if (err) {
                throw err;
            }
            newEntreprise
                .findById(req.params.id)
                .then((entreprise) => res.status(200).json(entreprise))
                .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
        }
    );
});

//Route Delete Entreprise
//path: http://localhost:5000/api/deleteEntreprise/:id
router.delete("/deleteEntreprise/:id", authMiddleware, (req, res) => {
    newEntreprise
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ msg: "Entreprise Deleted" }))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
