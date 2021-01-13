const express = require('express')
const router = express.Router();
const newCategorie = require("../modules/categorie")



router.post("/categorie", (req, res) => {
  const { reference, designation } = req.body
  const categorieModel = new newCategorie({
    reference,
    designation,
  });
  categorieModel.save()
    .then((categorie) => res.status(200).json(categorie))
    .catch((err) => res.status(400).json(err));
});

router.get("/categorie", (req, res) => {
  newCategorie.find()
    .then(categories => res.json(categories))
    .catch(err => console.log(err.message))
});
module.exports = router;