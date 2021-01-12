const express = require("express");
const router = express.Router();
const newService = require("../modules/service");
const authMiddleware = require("../../helpers/authMiddleware");

router.post("/service",authMiddleware,(req, res) => {
  const { nom,responsable } = req.body;
  let serviceModel = new newService({ nom,responsable } );
  serviceModel
    .save()
    .then((service) => res.status(200).json(service))
    .catch((err) => res.status(400).json(err));
});
router.get("/service",authMiddleware,(req, res) => {
    newService.find((err, doc) => {
    if (err) {
      res.status(400).json({ errors: [{ msg: "server ERROR" }] });
    }
    // console.log(doc);
    res.status(200).send(doc);
  });
});

router.delete("/service/:id",authMiddleware,(req, res) => {
  const serviceId = req.params.id;
  newService
    .findByIdAndDelete(serviceId)
    .then((service) => res.status(200).json(service))
    .catch((err) =>
      res.status(400).json({ errors: [{ msg: "server ERROR" }] })
    );
});

router.put("/service/:id",authMiddleware, (req, res) => {
  const serId = req.params.id;
  const { nom,responsable } = req.body;
  let serviceModel = new newService({ nom,responsable } );
  newService
    .findByIdAndUpdate(serId, { nom,responsable})
    .then((service) => res.status(200).json(service))
    .catch((err) => res.status.json({ errors: [{ msg: "server ERROR" }] }));
});
module.exports = router;