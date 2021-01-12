const express = require("express");
const router = express.Router();
const newTVA = require("../modules/TVA");

//Route Create TVA
router.post("/AddTVA", (req, res) => {
    const { taux, description } = req.body;
    let TVAModel = new newTVA({
        taux,
        description,
        
    });
    TVAModel.save()
        .then((TVA) => res.status(200).json(TVA))
        .catch((err) => res.status(400).json(err));
});

//Route Read TVAs
router.get("/TVAs", (req, res) => {
    newTVA
        .find()
        .then((TVA) => res.json(TVA))
        .catch((err) => console.log(err.message));
});

//Route Update TVA
router.put("/updateTVA/:id", (req, res) => {
    newTVA.findByIdAndUpdate(
        req.params.id,
        { $set: { ...req.body } },
        (err, data) => {
            if (err) {
                throw err;
            }
            newTVA
                .findById(req.params.id)
                .then((TVA) => res.json(TVA))
                .catch((err) => console.log(err.message));
        }
    );
});

//Route Delete TVA
router.delete("/deleteTVA/:id", (req, res) => {
    newTVA
        .findByIdAndDelete(req.params.id)
        .then(() => res.json({ msg: "TVA Deleted" }))
        .catch((err) => console.log(err.message));
});

module.exports = router;
