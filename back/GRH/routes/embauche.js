const express = require("express");
const router = express.Router();
const newEmbauche = require("../modules/embauche")

router.post("/embauche", (req, res) => {
  let db = new Date(req.body.dateEmbauche);
  let embaucheModel = new newEmbauche({
    dateEmbauche: db,
    fonction: req.body.fonction,
  });
  embaucheModel
    .save()
    .then((embauche) => res.status(200).json(embauche))
    .catch((err) => res.status(400).json(err));
});

router.get("/embauche", (req, res) => {
  newEmbauche.find((err, doc) => {
    if (err) {
      console.log(err.msg);
    }
    //console.log(doc);
    res.send(doc);
  });
});
module.exports = router;