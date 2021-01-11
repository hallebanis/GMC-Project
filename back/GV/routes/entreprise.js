const express = require("express");
const router = express.Router();
const newEntreprise = require("../modules/Entreprise");

//Route Create Entreprise
router.post("/AddEntreprise", (req, res) => {
    const { matricule, tel, email } = req.body;
    let EntrepriseModel = new newEntreprise({
        matricule,
        tel,
        email
    });
    EntrepriseModel.save()
        .then((entreprise) => res.status(200).json(entreprise))
        .catch((err) => res.status(400).json(err));
});

//Route Read Entreprises
router.get("/Entreprises", (req, res) => {
    newEntreprise
        .find()
        .then((Entreprises) => res.json(Entreprises))
        .catch((err) => console.log(err.message));
});

//Route Update Entreprise
router.put("/updateEntreprise/:id", (req, res) => {
    newEntreprise.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        (err, data) => {
            if (err) {
                throw err;
            }
            newEntreprise
                .findById(req.params.id)
                .then((entreprise) => res.json(entreprise))
                .catch((err) => console.log(err.message));
        }
    );
});

//Route Delete Entreprise
router.delete("/deleteEntreprise/:id", (req, res) => {
    newEntreprise
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "Entreprise Deleted" }))
        .catch((err) => console.log(err.message));
});

module.exports = router;
