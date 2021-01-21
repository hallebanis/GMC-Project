const express = require('express')
const router = express.Router();
const newCategorie = require("../modules/categorie");
const authMiddleware= require("../../helpers/authMiddleware")


// Add categorie Route
// Path : http://localhost:5000/api/addCategorie
router.post("/addCategorie",authMiddleware, (req, res) => {
  const { reference, designation } = req.body
  const categorieModel = new newCategorie({
    reference,
    designation,
  });
  categorieModel.save()
    .then((categorie) => res.status(200).json(categorie))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));


});


// Read Categorie Route
// Path : http://localhost:5000/api/categories
router.get("/categories",authMiddleware, (req, res) => {
  newCategorie.find()
    .then(categories => res.status(200).json(categories))
    .catch((err) => res.status(400).json({ errors: [{ msg: err }] }));

});
module.exports = router;