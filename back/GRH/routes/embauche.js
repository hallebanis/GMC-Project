const express = require("express");
const router = express.Router();
const newEmbauche = require("../modules/embauche")

const authMiddleware = require('../../helpers/authMiddleware')


router.post("/embauche",authMiddleware, (req, res) => {
  const {dateEmbauche,fonction}=req.body
  let embaucheModel = new newEmbauche({
    dateEmbauche,
    fonction

  });
  embaucheModel
    .save()
    .then((embauche) => res.status(200).json(embauche))
    .catch((err) => res.status(400).json(err));
});


router.get("/embauche",authMiddleware, (req, res) => {
  newEmbauche.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });    }
    //console.log(doc);
    res.status(200).send(doc);

  });
});

router.delete("/embauche/:id", (req, res) => {
  const embaucheId = req.params.id;
  newEmbauche
    .findByIdAndDelete(embaucheId)
    .then((embauche) => res.status(200).json(embauche))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});
module.exports = router;