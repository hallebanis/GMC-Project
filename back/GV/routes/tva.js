const express = require("express");
const router = express.Router();
const newTVA = require("../modules/TVA");
const authMiddleware = require ("../../helpers/authMiddleware");

//Route Create TVA
//path: http://localhost:5000/api/AddTVA
router.post("/AddTVA", authMiddleware, (req, res) => {
    const { taux, description } = req.body;
    let TVAModel = new newTVA({
        taux,
        description,
        
    });
    TVAModel.save()
        .then((TVA) => res.status(200).json(TVA))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Read TVAs
//path: http://localhost:5000/api/TVAs
router.get("/TVAs", authMiddleware, (req, res) => {
    newTVA
        .find()
        .then((TVA) => res.status(200).json(TVA))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

//Route Update TVA
//path: http://localhost:5000/api/updateTVA
router.put("/updateTVA", authMiddleware, (req, res) => {
    const {id,taux,description} = req.body;
    newTVA.findByIdAndUpdate(
        id,
        { taux,description},
        (err, data) => {
            if (err) {
                res.status(400).json({ errors: [{ msg: err }] });
            }
            newTVA
                .findById(req.params.id)
                .then((TVA) => res.status(200).json(TVA))
                .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
        }
    );
});

//Route Delete TVA
//path: http://localhost:5000/api/deleteTVA/:id
router.delete("/deleteTVA/:id", authMiddleware, (req, res) => {
    newTVA
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json({ msg: "TVA Deleted" }))
        .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));
});

module.exports = router;
